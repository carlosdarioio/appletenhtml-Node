const  config = {
  user:  'dflores', // sql user
  password:  '1234', //sql user password
  server:  'DESKTOP-1ULHC37', // if it does not work try- localhost
  database:  'basededatos',
  options: {
    trustedconnection:  true,
    enableArithAbort:  true,
    instancename:  'SQLEXPRESS'  //SQLEXPRESS | MSSQLSERVER SQL Server instance name
  },
  port:  1433
}

module.exports = config;