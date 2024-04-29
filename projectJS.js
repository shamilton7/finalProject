var form = document.getElementById('forms');


class Monday
{
        #breakfast;
        #lunch;
        #snacka;
        #snackb;
        #dinner;

        //enter getters and setters
        setMBreakfast(_breakfast){
            this.#breakfast = _breakfast;
        }
        getMBreakfast(){
             return this.#breakfast;
        }
        setMSnacka(_snacka){
            this.#snacka = _snacka;
        }
        getMSnacka(){
            return this.#snacka
        }
        setMSnackb(_snackb){
            this.#snackb = _snackb;
        }
        getMSnackb(){
            return this.#snackb;
        }
        setMLunch(_lunch){
            this.#lunch = _lunch;
        }
        getMLunch(){
            return this.#lunch;
        }
        setMDinner(_dinner){
            this.#dinner = _dinner;
        }
        getMDinner(){
            return this.#dinner;
        }
        
}

class Tuesday
    {
        #breakfast;
        #lunch;
        #snacka;
        #snackb;
        #dinner;
        
        //enter getters and setters
        setTBreakfast(_breakfast){
            this.#breakfast = _breakfast;
        }
        getTBreakfast(){
             return this.#breakfast;
        }
        setTSnacka(_snacka){
            this.#snacka = _snacka;
        }
        getTSnacka(){
            return this.#snacka;
        }
        setTSnackb(_snackb){
            this.#snackb = _snackb;
        }
        getTSnackb(){
            return this.#snackb;
        }
        setTLunch(lunch){
            this.#lunch = lunch;
        }
        getTLunch(){
            return this.#lunch;
        }
        setTDinner(_dinner){
            this.#dinner = _dinner;
        }
        getTDinner(){
            return this.#dinner;
        }
   
}

class Wednesday
    {
        #breakfast;
        #lunch;
        #snacka;
        #snackb;
        #dinner;
        
        //enter getters and setters
        setWBreakfast(_breakfast){
            this.#breakfast = _breakfast;
        }
        getWBreakfast(){
             return this.#breakfast;
        }
        setWSnacka(_snacka){
            this.#snacka = _snacka;
        }
        getWSnacka(){
            return this.#snacka;
        }
        setWSnackb(_snackb){
            this.#snackb = _snackb;
        }
        getWSnackb(){
            return this.#snackb;
        }
        setWLunch(lunch){
            this.#lunch = lunch;
        }
        getWLunch(){
            return this.#lunch;
        }
        setWDinner(_dinner){
            this.#dinner = _dinner;
        }
        getWDinner(){
            return this.#dinner;
        }
   
}
class Thursday
    {
        #breakfast;
        #lunch;
        #snacka;
        #snackb;
        #dinner;
        
        //enter getters and setters
        setThBreakfast(_breakfast){
            this.#breakfast = _breakfast;
        }
        getThBreakfast(){
             return this.#breakfast;
        }
        setThSnacka(_snacka){
            this.#snacka = _snacka;
        }
        getThSnacka(){
            return this.#snacka;
        }
        setThSnackb(_snackb){
            this.#snackb = _snackb;
        }
        getThSnackb(){
            return this.#snackb;
        }
        setThLunch(lunch){
            this.#lunch = lunch;
        }
        getThLunch(){
            return this.#lunch;
        }
        setThDinner(_dinner){
            this.#dinner = _dinner;
        }
        getThDinner(){
            return this.#dinner;
        }
   
}
class Friday
    {
        #breakfast;
        #lunch;
        #snacka;
        #snackb;
        #dinner;
        
        //enter getters and setters
        setFBreakfast(_breakfast){
            this.#breakfast = _breakfast;
        }
        getFBreakfast(){
             return this.#breakfast;
        }
        setFSnacka(_snacka){
            this.#snacka = _snacka;
        }
        getFSnacka(){
            return this.#snacka;
        }
        setFSnackb(_snackb){
            this.#snackb = _snackb;
        }
        getFSnackb(){
            return this.#snackb;
        }
        setFLunch(lunch){
            this.#lunch = lunch;
        }
        getFLunch(){
            return this.#lunch;
        }
        setFDinner(_dinner){
            this.#dinner = _dinner;
        }
        getFDinner(){
            return this.#dinner;
        }
   
}
class Saturday
    {
        #breakfast;
        #lunch;
        #snacka;
        #snackb;
        #dinner;
        
        //enter getters and setters
        setSSBreakfast(_breakfast){
            this.#breakfast = _breakfast;
        }
        getSSBreakfast(){
             return this.#breakfast;
        }
        setSSSnacka(_snacka){
            this.#snacka = _snacka;
        }
        getSSSnacka(){
            return this.#snacka;
        }
        setSSSnackb(_snackb){
            this.#snackb = _snackb;
        }
        getSSSnackb(){
            return this.#snackb;
        }
        setSSLunch(lunch){
            this.#lunch = lunch;
        }
        getSSLunch(){
            return this.#lunch;
        }
        setSSDinner(_dinner){
            this.#dinner = _dinner;
        }
        getSSDinner(){
            return this.#dinner;
        }
   
}
class Sunday
    {
        #breakfast;
        #lunch;
        #snacka;
        #snackb;
        #dinner;
        
        //enter getters and setters
        setSTBreakfast(_breakfast){
            this.#breakfast = _breakfast;
        }
        getSTBreakfast(){
             return this.#breakfast;
        }
        setSTSnacka(_snacka){
            this.#snacka = _snacka;
        }
        getSTSnacka(){
            return this.#snacka;
        }
        setSTSnackb(_snackb){
            this.#snackb = _snackb;
        }
        getSTSnackb(){
            return this.#snackb;
        }
        setSTLunch(lunch){
            this.#lunch = lunch;
        }
        getSTLunch(){
            return this.#lunch;
        }
        setSTDinner(_dinner){
            this.#dinner = _dinner;
        }
        getSTDinner(){
            return this.#dinner;
        }
   
}

form.addEventListener('reset', function(){
    form.reset();
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    var fullName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var breakf = document.getElementById('breakm').value;
    var lun = document.getElementById('lunchm').value;
    var snacka = document.getElementById('snackam').value;
    var dinner = document.getElementById('dinnerm').value;
    var snackb = document.getElementById('snackbm').value;

 
    var breakft = document.getElementById('breakt').value;
    var lunt = document.getElementById('luncht').value;
    var snackat = document.getElementById('snackat').value;
    var dinnert = document.getElementById('dinnert').value;
    var snackbt = document.getElementById('snackbt').value;

    var mon = new Monday;
    var tues = new Tuesday;
    var wed = new Wednesday;
    var thurs = new Thursday;
    var fri = new Friday;
    var sat = new Saturday;
    var sun = new Sunday;

    
    mon.setMBreakfast(breakf);
    mon.setMSnacka(snacka);
    mon.setMLunch(lun);
    mon.setMSnackb(snackb);
    mon.setMDinner(dinner);

    tues.setTBreakfast(breakft);
    tues.setTSnacka(snackat);
    tues.setTLunch(lunt);
    tues.setTSnackb(snackbt);
    tues.setTDinner(dinnert);

    wed.setWBreakfast(breakft);
    wed.setWSnacka(snackat);
    wed.setWLunch(lunt);
    wed.setWSnackb(snackbt);
    wed.setWDinner(dinnert);

    thurs.setThBreakfast(breakft);
    thurs.setThSnacka(snackat);
    thurs.setThLunch(lunt);
    thurs.setThSnackb(snackbt);
    thurs.setThDinner(dinnert);

    fri.setFBreakfast(breakft);
    fri.setFSnacka(snackat);
    fri.setFLunch(lunt);
    fri.setFSnackb(snackbt);
    fri.setFDinner(dinnert);

    sat.setSSBreakfast(breakft);
    sat.setSSSnacka(snackat);
    sat.setSSLunch(lunt);
    sat.setSSSnackb(snackbt);
    sat.setSSDinner(dinnert);

    sun.setSTBreakfast(breakft);
    sun.setSTSnacka(snackat);
    sun.setSTLunch(lunt);
    sun.setSTSnackb(snackbt);
    sun.setSTDinner(dinnert);
    
   
    
    var logo = '<img src="C:/Users/hamsh/Documents/Workspace/Assignments/build_your_meal_plan.png" width="550", "height=400" />';
    var newWindow = window.open('_blank');
    newWindow.document.write(logo);

    newWindow.document.write('<h1>Weekly Planner</h1>');

    newWindow.document.write('Name: ' + fullName + '<br>' + 'Email:' + email);

   newWindow.document.write('<h2>Monday planner: <h2>');
   newWindow.document.write('Breakfast: '+ mon.getMBreakfast());
   newWindow.document.write('<br>');
   newWindow.document.write('Midday snack:' + mon.getMSnacka());
   newWindow.document.write('<br>');
   newWindow.document.write('Lunch:' + mon.getMLunch());
   newWindow.document.write('<br>');
   newWindow.document.write('Late snack:' + mon.getMSnackb());
   newWindow.document.write('<br>');
   newWindow.document.write('Dinner:' + mon.getMDinner());
   newWindow.document.write('<br> <br>');

   newWindow.document.write('<h2>Tuesday planner: <h2>')
   newWindow.document.write('Breakfast:' + tues.getTBreakfast());
   newWindow.document.write('<br>');
   newWindow.document.write('Midday snack:' + tues.getTSnacka());
   newWindow.document.write('<br>');
   newWindow.document.write('Lunch:' + tues.getTLunch());
   newWindow.document.write('<br>');
   newWindow.document.write('Late snack:' + tues.getTSnackb());
   newWindow.document.write('<br>');
   newWindow.document.write('Dinner:' + tues.getTDinner());
   newWindow.document.write('<br> <br>');

   newWindow.document.write('<h2>Wednesday planner: <h2>')
   newWindow.document.write('Breakfast:' + wed.getWBreakfast());
   newWindow.document.write('<br>');
   newWindow.document.write('Midday snack:' + wed.getWSnacka());
   newWindow.document.write('<br>');
   newWindow.document.write('Lunch:' + wed.getWLunch());
   newWindow.document.write('<br>');
   newWindow.document.write('Late snack:' + wed.getWSnackb());
   newWindow.document.write('<br>');
   newWindow.document.write('Dinner:' + wed.getWDinner());
   newWindow.document.write('<br>');
   newWindow.document.write('<br>');

   newWindow.document.write('<h2>Thursday planner: <h2>')
   newWindow.document.write('Breakfast:' + thurs.getThBreakfast());
   newWindow.document.write('<br>');
   newWindow.document.write('Midday snack:' + thurs.getThSnacka());
   newWindow.document.write('<br>');
   newWindow.document.write('Lunch:' + thurs.getThLunch());
   newWindow.document.write('<br>');
   newWindow.document.write('Late snack:' + thurs.getThSnackb());
   newWindow.document.write('<br>');
   newWindow.document.write('Dinner:' + thurs.getThDinner());
   newWindow.document.write('<br>');
   newWindow.document.write('<br>');

   newWindow.document.write('<h2>Friday planner: <h2>')
   newWindow.document.write('Breakfast:' + fri.getFBreakfast());
   newWindow.document.write('<br>');
   newWindow.document.write('Midday snack:' + fri.getFSnacka());
   newWindow.document.write('<br>');
   newWindow.document.write('Lunch:' + fri.getFLunch());
   newWindow.document.write('<br>');
   newWindow.document.write('Late snack:' + fri.getFSnackb());
   newWindow.document.write('<br>');
   newWindow.document.write('Dinner:' + fri.getFDinner());
   newWindow.document.write('<br>');
   newWindow.document.write('<br>');

   newWindow.document.write('<h2>Saturday planner: <h2>')
   newWindow.document.write('Breakfast:' + sat.getSSBreakfast());
   newWindow.document.write('<br>');
   newWindow.document.write('Midday snack:' + sat.getSSSnacka());
   newWindow.document.write('<br>');
   newWindow.document.write('Lunch:' + sat.getSSLunch());
   newWindow.document.write('<br>');
   newWindow.document.write('Late snack:' + sat.getSSSnackb());
   newWindow.document.write('<br>');
   newWindow.document.write('Dinner:' + sat.getSSDinner());
   newWindow.document.write('<br>');
   newWindow.document.write('<br>');

   newWindow.document.write('<h2>Sunday planner: <h2>')
   newWindow.document.write('Breakfast:' + sun.getSTBreakfast());
   newWindow.document.write('<br>');
   newWindow.document.write('Midday snack:' + sun.getSTSnacka());
   newWindow.document.write('<br>');
   newWindow.document.write('Lunch:' + sun.getSTLunch());
   newWindow.document.write('<br>');
   newWindow.document.write('Late snack:' + sun.getSTSnackb());
   newWindow.document.write('<br>');
   newWindow.document.write('Dinner:' + sun.getSTDinner());


   newWindow.document.write('<button type="print" onclick="window.print()">Print</button>');
   newWindow.document.write(' <a href="_blank" download> <button type="download"> Download </button> </a>');
})

