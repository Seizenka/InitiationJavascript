let nouvelleetat,secret,motif,face,bonnepaire,carte;



motif = [0,0,1,1,2,2,3,3,4,4,5,5,6,6];
face = [0,0,0,0,0,0,0,0,0,0,0,0];

secret = [];
bonnepaire = 0;

carte = document.getElementById("tapis").getElementsByTagName("img");


for(let i = 0;i<carte.length;i++){
      carte[i].nbcarte=i;
      carte[i].onclick = function(){
          controle(this.nbcarte);
  }
}

initialise();

function maj(nbcarte){
      switch(face[nbcarte]){
        case 0:
                carte[nbcarte].src="img/dos-bleu.png";
                break;
        case 1:
                carte[nbcarte].src="img/animals"+motif[nbcarte]+".jpg";
                break;
        case -1:
                carte[nbcarte].style.visibility="hidden";
                break;
      }
}

function restart(){
        alert("bravo! Tu as tous trouvé");
        location.reload();
}

function initialise(){
      for(let position = motif.length - 1; position >=1; position--){
              let hasard = Math.floor(Math.random()*(position+1));
              let save = motif[position];
                motif[position] = motif[hasard];
                motif[hasard] = save;
      }
}

function controle(nbcarte){
    if(secret.length<2){

          if(face[nbcarte] == 0){
              face[nbcarte] = 1;
              secret.push(nbcarte);
              maj(nbcarte);
            }
            if(secret.length == 2){
                nouvelleetat = 0;
                if(motif[secret[0]] == motif[secret[0]]);
                nouvelleEtat = -1;
                bonnepaire++
              }
              face[secret[0]] == nouvelleetat;
              face[secret[0]] == nouvelleetat;

              setTimeout(function(){
                maj(secret[0]);
                maj(secret[1]);
                secret = [];
                      if (bonnepaire == 10){
                          restart();
                        }
                      },750);
                    }
                }