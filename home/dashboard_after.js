Router.route('/dashboard_after', function(){
	this.render('dashboard_after');
});

if (Meteor.isClient) {
Template.dashboard_after.rendered = function() { 
	calendarString = '';
	var daycounter = 0;
	calendarString += '<table width="312" border="1" cellpadding="0" cellspacing="1">';
	calendarString += '<tr>';
	calendarString += '<td align=\"center\" valign=\"center\" width=\"40\" height=\"40\"><a href=\"#\" onMouseOver=\"document.PrevYr.src=\'images\/PrevYrOn40x40\.jpg\';\" onMouseOut=\"document.PrevYr.src=\'images\/PrevYrOff40x40\.jpg\';\" onClick=\"changedate(\'prevyr\')\"><img name=\"PrevYr\" src=\"images\/PrevYrOff40x40\.jpg\" width=\"40\" height=\"40\" border=\"0\" alt=\"Prev Yr\"\/><\/a><\/td>';
	calendarString += '<td align=\"center\" valign=\"center\" width=\"40\" height=\"40\"><a href=\"#\" onMouseOver=\"document.PrevMo.src=\'images\/PrevMoOn40x40\.jpg\';\" onMouseOut=\"document.PrevMo.src=\'images\/PrevMoOff40x40\.jpg\';\" onClick=\"changedate(\'prevmo\')\"><img name=\"PrevMo\" src=\"images\/PrevMoOff40x40\.jpg\" width=\"40\" height=\"40\" border=\"0\" alt=\"Prev Mo\"\/><\/a><\/td>';
	calendarString += '<td bgcolor=\"#C8C896\" align=\"center\" valign=\"center\" width=\"128\" height=\"40\" colspan=\"3\"><b>' + wordMonth[monthNum-1] + '&nbsp;&nbsp;' + yearNum + '<\/b><\/td>';
	calendarString += '<td align=\"center\" valign=\"center\" width=\"40\" height=\"40\"><a href=\"#\" onMouseOver=\"document.NextMo.src=\'images\/NextMoOn40x40\.jpg\';\" onMouseOut=\"document.NextMo.src=\'images\/NextMoOff40x40\.jpg\';\" onClick=\"changedate(\'nextmo\')\"><img name=\"NextMo\" src=\"images\/NextMoOff40x40\.jpg\" width=\"40\" height=\"40\" border=\"0\" alt=\"Next Mo\"\/><\/a><\/td>';
	calendarString += '<td align=\"center\" valign=\"center\" width=\"40\" height=\"40\"><a href=\"#\" onMouseOver=\"document.NextYr.src=\'images\/NextYrOn40x40\.jpg\';\" onMouseOut=\"document.NextYr.src=\'images\/NextYrOff40x40\.jpg\';\" onClick=\"changedate(\'nextyr\')\"><img name=\"NextYr\" src=\"images\/NextYrOff40x40\.jpg\" width=\"40\" height=\"40\" border=\"0\" alt=\"Next Yr\"\/><\/a><\/td>';
	calendarString += '<\/tr>';
	calendarString += '<tr>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"40\" height=\"22\">Sun<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"40\" height=\"22\">Mon<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"40\" height=\"22\">Tue<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"40\" height=\"22\">Wed<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"40\" height=\"22\">Thu<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"40\" height=\"22\">Fri<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"40\" height=\"22\">Sat<\/td>';
	calendarString += '<\/tr>';

	thisDate == 1;

	for (var i = 1; i <= 6; i++) {
		calendarString += '<tr>';
		for (var x = 1; x <= 7; x++) {
			daycounter = (thisDate - firstDay)+1;
			thisDate++;
			if ((daycounter > numbDays) || (daycounter < 1)) {
				calendarString += '<td align=\"center\" bgcolor=\"#888888\" height=\"30\" width=\"40\">&nbsp;<\/td>';
			} else {
				if (checkevents(daycounter,monthNum,yearNum,i,x) || ((todaysDay == x) && (todaysDate == daycounter) && (todaysMonth == monthNum))){
					if ((todaysDay == x) && (todaysDate == daycounter) && (todaysMonth == monthNum)) {
						calendarString += '<td align=\"center\" bgcolor=\"#AAFFAA\" height=\"30\" width=\"40\"><a href=\"javascript:showevents(' + daycounter + ',' + monthNum + ',' + yearNum + ',' + i + ',' + x + ')\">' + daycounter + '<\/a><\/td>';
					}
 					else	calendarString += '<td align=\"center\" bgcolor=\"#FFFFC8\" height=\"30\" width=\"40\"><a href=\"javascript:showevents(' + daycounter + ',' + monthNum + ',' + yearNum + ',' + i + ',' + x + ')\">' + daycounter + '<\/a><\/td>';
				} else {
					calendarString += '<td align=\"center\" bgcolor=\"#DDFFFF\" height=\"30\" width=\"40\">' + daycounter + '<\/td>';
				}
			}
		}
		calendarString += '<\/tr>';
	}

	calendarString += '<tr><td colspan=\"7\" nowrap align=\"center\" valign=\"center\" bgcolor=\"#C8C896\" width=\"280\" height=\"22\"><a href=\"javascript:changedate(\'return\')\"><b>Show Current Date<\/b><\/a><\/td><\/tr><\/table>';

	var object=document.getElementById('calendar');
	object.innerHTML= calendarString;
	thisDate = 1;
};
}