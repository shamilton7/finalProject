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
      

        
    //to get the proper form in new webpage, I need to use jQuery
    var newWindow = window.open('');
    newWindow.document.write('<h1>Weekly Planner</h1>');
    newWindow.document.write('Name: ' + fullName + '\t' + 'Email:' + email);
   newWindow.document.write('<h2>Monday planner: <h2>')
   newWindow.document.write('<p>Breakfast:<p>' + mon.getMBreakfast());
   newWindow.document.write('<p>Midday snack:<p>' + mon.getMSnacka());
   newWindow.document.write('<p>Lunch:<p>' + mon.getMLunch());
   newWindow.document.write('<p>Late snack:<p>' + mon.getMSnackb());
   newWindow.document.write('<p>Dinner:<p>' + mon.getMDinner());

   newWindow.document.write('<h2>Tuesday planner: <h2>')
   newWindow.document.write('<p>Breakfast:<p>' + tues.getTBreakfast());
   newWindow.document.write('<p>Midday snack:<p>' + tues.getTSnacka());
   newWindow.document.write('<p>Lunch:<p>' + tues.getTLunch());
   newWindow.document.write('<p>Late snack:<p>' + tues.getTSnackb());
   newWindow.document.write('<p>Dinner:<p>' + tues.getTDinner());
})

