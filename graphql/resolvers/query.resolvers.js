const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';

exports.userbyId = (parent, args, ctx) => {
  return ctx.prisma.users.findOne({
    where: { id: args.id }
  });
};

exports.userbyUsernameAndPassword = async (parent, args, ctx) => {  
  const response = {
    status: "",
    message: "",
    token: "",
    userData: {},
  };

  const usernameExists = await ctx.prisma.users.findOne({
    where: { username: args.username }
  });
  if (usernameExists) {
    const validatedPass = await bcrypt.compare(args.password, usernameExists.password);
    if (validatedPass) {
      const accessToken = jwt.sign(usernameExists.id, SECRET_KEY);
      console.log(' ---> usernameExists', usernameExists);
      const userLocations = await ctx.prisma.savedLocations.findMany({
        where: { user_id: usernameExists.id }
      })
      console.log(' ---> userLocations', userLocations);
      const userEvents = [];
      for (let location of userLocations) {
        const events = await ctx.prisma.events.findMany({
          where: { location_id: location.id }
        });
        userEvents.push(...events);
      }
      console.log(' ---> userEvents', userEvents);

      response.token = accessToken;
      response.userData = usernameExists;
      response.userData.password = null;
      response.locationData = userLocations;
      response.eventData = userEvents;
      response.status = 200;
      response.message = 'Authenticated';
      return response;
    } else {
      response.status = 404;
      response.message = "Wrong username or password";
      return response;
    }
  } else {
    response.status = 404;
    response.message = "Wrong username or password";
    return response;
  }
};

exports.eventsbyAlertType = (parent, args, ctx) => {
  return ctx.prisma.events.findMany({
    where: { alertType: args.alertType }
  });
};

exports.eventsbyLocation_Id = (parent, args, ctx) => {
  return ctx.prisma.events.findMany({
    where: { location_id: args.location_id }
  });
};

exports.eventsbyMultipleLocationIds = async (parent, args, ctx) => {
  const events = [];
  for (let id of args.location_ids) {
    const res = await ctx.prisma.events.findMany({
      where: { location_id: id }
    });
    events.push(...res);
  }
  return events;
};

exports.getLocationbyURL = (parent, args, ctx) => {
  return ctx.prisma.locations.findOne({
    where: { googlemap_URL: args.googlemap_URL }
  });
};

exports.getLocationbyId = async (parent, args, ctx) => {
  return ctx.prisma.locations.findOne({
    where: { id: args.id }
  });
};

exports.savedLocationbyUser_Id = async (parent, args, ctx) => {
  return ctx.prisma.savedLocations.findMany({
    where: { user_id: args.user_id }
  }); 
};

exports.savedLocationbyLocation_Id = async (parent, args, ctx) => {
  return ctx.prisma.savedLocations.findMany({
    where: { location_id: args.location_id }
  }); 
};