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
  console.log('userexists', userExists)

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
    console.log('newUser', newUser)
    if (newUser) {
      await sendEmail({
        to: 'rahul.ruecker@ethereal.email',
        subject:'test',
        html: `<h4>Verify Email</h4>
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

exports.createNewLocation = (parent, args, ctx) => {
  // check that the new location doesn't already exist in the DB
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