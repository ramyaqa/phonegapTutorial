var app = {
    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function() {
            var el = new HomeView(self.store).render().el;
            $('body').html('test' + el.html());
            console.log("render complete");
        });
    }

};

app.initialize();