var app = {
    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function() {
            var el = new HomeView(self.store).render().el;
            alert(el.html());
            $('body').html('test' + el.html());
            console.log("render complete");
        });
    }

};

app.initialize();