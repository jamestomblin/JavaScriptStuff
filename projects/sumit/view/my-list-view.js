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

app.MyVideoListView = Backbone.View.extend({

    list_e: $("#my-video-list"),
    // Compile the template using underscore
    template : _.template( $("#my-video-list-template").html() ),

    initialize: function(options){

        console.log('cool');

        this.options = options || {};

        this.listenTo(this.model,'change', this.render);

            this.model.fetch({
                url: "projects/sumit/local-api/my-video-list-view.json",
                success: function(e) {
                    console.log('model loaaaaaded');
                   // this.model.attributes.complete = true;

                   // if(this.options.loc != undefined ){

                     //   this.trigger('setContent', this.options );

                    //}

                }.bind(this),
                error: function(e){
                    console.log('There was some error in loading and processing the JSON file');
                }
            });

    },

    select:function(){


        this.options.vent.trigger("editMedication", this.model);

    },


    render:function(){

        console.log(this.model.attributes);

        this.list_e.html( this.template({data:this.model.attributes.list}) );


    }

});