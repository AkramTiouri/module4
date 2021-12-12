var names=new Array();
names[0]="Yaakov";
names[1]="Akram";
names[2]="ikram";
names[3]="achraf";
names[4]="othmane";
names[5]="oussama";
names[6]="anas";
names[7]="jack";
names[8]="jimmy";
names[9]="Abssi";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
