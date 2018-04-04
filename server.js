config.web.port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || process.env.WEB_PORT || 3000;

config.web.ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP;

app.listen(server_port, server_ip_address, function () {

    console.log( "Listening on " + server_ip_address + ", server_port " + server_port  );

});
