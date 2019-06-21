var Service = Backbone.View.extend({
    el:$("#container"),
    
    render:function(){
        var template = _.template($("#service").html());
        this.$el.html(template);
    }
});

var Classes = Backbone.View.extend({
    el:$("#container"),
    
    render:function(){
        var template = _.template($("#classes").html());
    
        this.$el.html(template);
    }
});
var Resources = Backbone.View.extend({
    el:$("#container"),
    
    render:function(){
        var template = _.template($("#resources").html());
        this.$el.html(template);
    }
});

//Team view

var Team = Backbone.View.extend({
    el:$("#container"),
    template:_.template($("#team").html()),
    render:function()
    
    {
        this.$el.html(this.template);
    }
    
});

var Router = Backbone.Router.extend({
    routes:{
        "":"Service",
        "Service/:id":"services",
        "Team":"Team",
        "Location":"Location"
    },
    Service:function(){
        console.log("hai")
    },
    Team:function(){
        console.log("hai team..");
        var team = new Team();
        team.render();
    },
    
    Location:function(){
        console.log("hai2")
    },
     services:function(id){
        console.log("name:"+id)
         if(id == "services")
        {
         var service = new Service();
         service.render();
            
         } else if(id == "classes")
             
         {
             console.log('classes..');
             var classes = new Classes();
             classes.render();
         }else
             
         {
             console.log("resources...");
             var resources = new Resources();
             resources.render();
         }
    }
    
    
});

var router = new Router();

Backbone.history.start();