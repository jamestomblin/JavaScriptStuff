/**
 * Created by stomblin on 1/19/14.
 */
/**
 * Created by stomblin on 1/19/14.
 */
/**
 * Created with JetBrains PhpStorm.
 * User: stomblin
 * Date: 1/13/14
 * Time: 6:09 PM
 * To change this template use File | Settings | File Templates.
 */
var app =  app || {};

app.VideoDetailsView = Backbone.View.extend({

    el: $("#detail-video"),
    // Compile the template using underscore
    template : _.template( $("#detail-video-template").html() ),

    initialize: function(options){


        options.vent.on("editMedication", this.setDetail.bind(this));
        //this.render();
        console.log(this.$el);

    },
    setDetail:function(data){


        this.model = data;

        this.render();

    },

    render:function(){



        console.log(this.model);

        //this.$el.html( this.template({data:data}));
        this.$el.html(this.template({data:this.model}));


    }

});