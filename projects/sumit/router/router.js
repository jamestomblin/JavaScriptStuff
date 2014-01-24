/**
 * Created by stomblin on 1/19/14.
 */

var app =  app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'index.html': 'home',
        ':level': 'blockGrid', // Matches http://example.com/#six
        'block/:level/:num': 'blockNum', // Matches http://example.com/#block/six/34
        '*actions': 'defaultAction' // Matches http://example.com/#anything-here
    },

    home : function()
    {
        console.log('log');

        //app.myVideoView = new app.MyVideoListView({model:new app.MyVideoListModel(), vent: vent });

        app.courseVideoView = new app.CourseVideoListView({model:new app.CourseVideoListModel(),  vent: vent });
        app.details = new app.VideoDetailsView({vent: vent});

    },

    blockGrid : function(level){
        grid(level); // Calling grid function
    },

    blockNum : function(level,num){
        gridNum(level,num); // Calling gridNum function
    }

})

var vent = _.extend({}, Backbone.Events);

//var detailView = new app.VideoDetailsView({vent: vent});


$(document).ready(function()
{
    app.appRouter = new app.AppRouter(); // Router initialization
    Backbone.history.start(); // Backbone start
});


