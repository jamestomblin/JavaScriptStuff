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

app.CourseVideoListView = Backbone.View.extend({

    el: $("#course-video-list"),
    // Compile the template using underscore
    template : _.template( $("#course-video-list-template").html() ),

    initialize: function(options){



        console.log('cool');

        this.options = options || {};

        this.listenTo(this.model,'change', this.render);

        this.model.fetch({
            url: "projects/sumit/local-api/course-video-list-view.json",
            success: function(e) {
                console.log('model load list view');
                // this.model.attributes.complete = true;

                // if(this.options.loc != undefined ){

                //   this.trigger('setContent', this.options );

                //}


            }.bind(this),
            error: function(e){
                console.log('There was some error in loading and processing the JSON file');
            }
        });

//console.log(this);


    },

    //we listen for clicks on items with the css class "button"
    events : {
        "click .button" : "buttonClickHandler"
    },

    buttonClickHandler : function(e){
      //  alert(   $(e.currentTarget).data("id"));
        this.select($(e.currentTarget).data("index"))

        return false;
    },

    select:function(index){

        console.log('selected' + index);
        this.options.vent.trigger("editMedication", this.model.attributes.list[index]);

    },

    render:function(){

        console.log(this.model.attributes);
        console.log(this.$el);

        this.$el.html( this.template({data:this.model.attributes.list}) );


    }

});