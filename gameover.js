Game.gameover = function(game){
    
};
//Αποτελεί το state που ενεργοποιείται όταν ο χρήστης βρει το κλειδί

var gameoverScreen;//Μεταβλητή του spite της αντίστοιχης εικόνας ανάλογα με τον αριθμό
var button2;//Κουμπί Play Again
var i2;//Μεταβλητή ελέγχου αν πατήθηκε το κουμπί Play Again
var music;//Περιέχει τον ήχο
var sum2Text;//Περιέχει το κείμενο που θα εμφανιστεί στην οθόνη για το 2
var sum3Text;//Περιέχει το κείμενο που θα εμφανιστεί στην οθόνη για το 3
var sum5Text;//Περιέχει το κείμενο που θα εμφανιστεί στην οθόνη για το 5
var sum10Text;//Περιέχει το κείμενο που θα εμφανιστεί στην οθόνη για το 10
var apotelesmataText;//Περιέχει το κείμενο που αποτελείται από τον πίνακα συγκεκριμένων λάθος αριθμών
var pinakas;//Περιέχει τους συγκεκριμένους λάθος αριθμούς

Game.gameover.prototype = {
    create:function(game){
         music = this.add.audio('song');
        //Επιλογή της κατάλληλης εικόνας ανάλογα με τον αριθμό
        if(x==2){
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen2');
        }
        if(x==3){
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen3');
        }
        if(x==5){
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen5');
        }
         if(x==10){
         gameoverScreen = this.add.tileSprite(0,0,3200,800,'gameoverScreen10');
        }
          //Δημιουργία του κουμπιού Play Again
          button2 = this.add.button(400,50,'playagain',this.actionOnClick2,this);
         //Ορισμός φόντου, γραμματοσειράς και σημείου που θα εμφανιστεί το κείμενο
          if(x==2){
        sum2Text = game.add.text(50,250,'sum2=',{fontSize: '32px',fill : '#000'});
       }
         if(x==3){
        sum3Text = game.add.text(50,250,'sum3=',{fontSize: '32px',fill : '#000'});
       }
         if(x==5){
        sum5Text = game.add.text(50,250,'sum5=',{fontSize: '32px',fill : '#000'});
       }
        if(x==10){
        sum10Text = game.add.text(50,250,'sum10=',{fontSize: '32px',fill : '#000'});
       }
       apotelesmataText = game.add.text(15,430,'You chose wrong the numbers',{fontSize: '32px',fill : '#000'});
     pinakas = apotelesmata.join(" , ");
        apotelesmataText.text = 'You chose wrong the numbers \n ' + pinakas;        
        
       // gameoverScreen = game.add.sprite(game.world.centerX -800,game.world.centerY + 25,'gameoverScreen');
        //gameoverScreen.anchor.setTo(0.5,0.5);
  
    },
    
    update:function(game){
        //Αν πατηθεί το Play Again, o χρήστης μεταφέρεται στο state του αρχικού μενού 
        //Επίσης γίνονται μηδενισμοί κάποιων μεταβλητών για αποφυγή προβλήματος στην επανεκκίνηση της πίστας
        if(i2==1){
            this.state.start('MainMenu');
             life = 3;
            sum2=0;
            sum3=0;
            sum5=0;
            sum10=0;
            i2=0;
            lathos = 0;
            s2=0;
            s3=0;
            s5=0;
            s10=0;
            wk =0;
            apotelesmata = []
            n=17;
        }
        //Εμφάνιση των αποτελεσμάτων σύμφωνα με τα Learning Analytics
        //Ελέγχεται το πλήθος της κάθε μεταβλητής ώστε να υπάρχει σωστή διατύπωση σε ενικό ή πληθυντικό αντίστοιχα
        if(x==2 && lathos!==1){
        sum2Text.text = 'You found right ' + sum2 + ' numbers\nfrom ' + s2 + ' which are divisible with 2! \n But you chose wrong ' + lathos + ' numbers';
       }
        if(x==3 && lathos!==1){
        sum3Text.text = 'You found right ' + sum3 + ' numbers\nfrom ' + s3 + ' which are divisible with 3! \n But you chose wrong ' + lathos + ' numbers';
        }
        if(x==5 && lathos!==1){
        sum5Text.text = 'You found right ' + sum5 + ' numbers\nfrom ' + s5 + ' which are divisible with 5! \n But you chose wrong ' + lathos + ' numbers';
        }
        if(x==10 && lathos!==1){
        sum10Text.text = 'You found right ' + sum10 + ' numbers\nfrom ' + s10 + ' which are divisible with 10! \n But you chose wrong ' + lathos + ' numbers';
        }
        
        
        
        if(x==2 && lathos==1){
        sum2Text.text = 'You found right ' + sum2 + ' numbers\nfrom ' + s2 + ' which are divisible with 2! \n But you chose wrong ' + lathos + ' number';
       }
        if(x==3 && lathos==1){
        sum3Text.text = 'You found right ' + sum3 + ' numbers\nfrom ' + s3 + ' which are divisible with 3! \n But you chose wrong ' + lathos + ' number';
        }
        if(x==5 && lathos==1){
        sum5Text.text = 'You found right ' + sum5 + ' numbers\nfrom ' + s5 + ' which are divisible with 5! \n But you chose wrong ' + lathos + ' number';
        }
        if(x==10 && lathos==1){
        sum10Text.text = 'You found right ' + sum10 + ' numbers\nfrom ' + s10 + ' which are divisible with 10! \n But you chose wrong ' + lathos + ' number';
        }
        
    },
    
   //Καλείται όταν πατηθεί το κουμπί Play Again
  actionOnClick2:function(){
    i2=1;
     },
   
};
