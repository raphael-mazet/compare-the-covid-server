const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { send } = require('process');
const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';
const sendEmail = require('../../mail/sendmail');


exports.createNewUser = async (parent, args, ctx) => {
  const response = {
    status: '',
    message: '',
    token: '',
    userData: {}
  }
  const userExists = await ctx.prisma.users.findOne({
    where: { username: args.username }
  });
  if (userExists) {
    response.message = 'Email already used';
    response.status = 404;
    return response;
  } else {
    const hash = await bcrypt.hash(args.password, 10);
    const newUser = await ctx.prisma.users.create({
      data: { 
        username: args.username,
        password: hash,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        last_loggedin: new Date().toISOString()
      }
    });
    if (newUser) {
      await sendEmail({
        // to: `${newUser.email}`,
        to: 'rahul.ruecker@ethereal.email',
        subject:'Compare-the-Covid Sign-Up Confirmed',
        html: `<h4>User Created</h4>
        <p>Thanks for registering!</p>`
      })
      const accessToken = jwt.sign(newUser.id, SECRET_KEY);
      response.status= 200;
      response.message = 'User generated';
      response.userData = newUser;
      delete response.userData.password;
      response.token = accessToken;
      return response;
    } else {
      return null;
    }
    
  }
};

exports.createNewEvent = (parent, args, ctx) => {
  console.log('args',args)
  return ctx.prisma.events.create({
    data: { 
      alertType: args.alertType,
      alertDate: args.alertDate,
      alertScore: args.alertScore,
      locations: {
        connect: { id: args.location_id }
      },
      created_at: args.created_at,
      expires_on: args.expires_on,
    }
  });
};

exports.createNewLocation = async (parent, args, ctx) => {
  // check that the new location doesn't already exist in the DB
  const locationExists = await ctx.prisma.locations.findOne({
    where: { googlemap_URL: args.googlemap_URL }
  });
  if (!locationExists) { 
    return ctx.prisma.locations.create({
      data: { 
        name: args.name,
        country: args.country,
        googlemap_URL: args.googlemap_URL,
        location_type: args.location_type,
        longitude: Number(args.longitude),
        latitude: Number(args.latitude),
      }
    });
  } else {
    return locationExists
  }
};

exports.createNewSavedLocation = async (parent, args, ctx) => {
  const locationExists = await ctx.prisma.savedLocations.findMany({
    where: { 
      user_id: { equals: args.user_id },
      location_id: { equals: args.location_id },
    }
  });
  if (locationExists.length) {
    return locationExists[0];
  } else {
    return ctx.prisma.savedLocations.create({
      data: { 
        users: {
          connect: { id: args.user_id }
        },
        locations: {
          connect: { id: args.location_id,}
        },
        selection_date: args.selection_date,
      }
    });
  }
};