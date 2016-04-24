AccountInfoStore = new Mongo.Collection('account_info');

Meteor.methods({
	createRider: function (email, password, first_name, last_name, birthday, phone, address, city, state, zipcode, credit_card_number, ccv, expiration_date){
		if (AccountIndoStore.find({email: email}).count() === 0) {
			AccountInfoStore.insert({
				email: email,
				password: password,
				first_name: first_name,
				last_name: last_name,
				birthday: birthday,
				phone: phone,
				address: address,
				city: city,
				state: state,
				zipcode: zipcode,
				credit_card_number: credit_card_number,
				ccv: ccv,
				expiration_date: expiration_date
			});	
		}
	},

	createDriver: function (email, password, first_name, last_name, birthday, phone, local_senior_center){
		if (AccountIndoStore.find({email: email}).count() === 0) {
			AccountInfoStore.insert({
				email: email,
				password: password,
				first_name: first_name,
				last_name: last_name,
				birthday: birthday,
				phone: phone,
				local_senior_center: local_senior_center
			});
		}
	}
});




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}