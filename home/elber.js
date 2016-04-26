Router.route('/', function () {
      this.render('membership');
    });

Router.route('/about', function() {
	this.render('about');
});

Router.route('/faq', function() {
	this.render('faq');
});

Router.route('/signup', function() {
	this.render('signup');
});

Router.route('/login', function() {
	this.render('login');
});

Router.route('/dashboard', function(){
	this.render('dashboard');
});


if (Meteor.isClient) {
  
}
