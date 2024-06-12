import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'app-report',
	templateUrl: './report.component.html',
	styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		
	}	

	displayTech(e){
		const tech = document.getElementById("tech-skills")
		const ele = e.srcElement
		
		this.showHide(tech, ele)
		// bg-green-200
	}

	displaySoft(e){
		const soft = document.getElementById("soft-skills")
		const ele = e.srcElement
		this.showHide(soft, ele)
	}

	displayAge(e){
		const age = document.getElementById("age")
		const ele = e.srcElement
		this.showHide(age, ele)
	}

	displayGender(e){
		const gender = document.getElementById("gender")
		const ele = e.srcElement
		this.showHide(gender, ele)
	}

	displayOps(e){
		const ops = document.getElementById("ops")
		const ele = e.srcElement
		this.showHide(ops, ele)
	}

	displayRace(e){
		const race = document.getElementById("race")
		const ele = e.srcElement
		this.showHide(race, ele)
	}

	displayIDE(e){
		const ide = document.getElementById("ide")
		const ele = e.srcElement
		this.showHide(ide, ele)
	}

	displayWorkspace(e){
		const work = document.getElementById("work")
		const ele = e.srcElement
		this.showHide(work, ele)
	}

	displayCaps(e){
		const caps = document.getElementById("caps")
		const ele = e.srcElement
		this.showHide(caps, ele)
	}

	displayTabs(e){
		const tabs = document.getElementById("tabs")
		const ele = e.srcElement
		this.showHide(tabs, ele)
	}

	displayfTech(e){
		const ftech = document.getElementById("ftech")
		const ele = e.srcElement
		this.showHide(ftech, ele)
	}


	showHide(comp: any, ele: any){
		const tech = document.getElementById("tech-skills")
		const soft = document.getElementById("soft-skills")
		const age = document.getElementById("age")
		const gender = document.getElementById("gender")
		const ops = document.getElementById("ops")
		const race = document.getElementById("race")
		const ide = document.getElementById("ide")
		const work = document.getElementById("work")
		const caps = document.getElementById("caps")
		const tabs = document.getElementById("tabs")
		const ftech = document.getElementById("ftech")


		if (comp === tech) {
			tech.classList.remove("hide")
			tech.classList.add("show")

			soft.classList.remove("show")
			soft.classList.add("hide")

			age.classList.remove("show")
			age.classList.add("hide")

			gender.classList.remove("show")
			gender.classList.add("hide")

			ops.classList.remove("show")
			ops.classList.add("hide")

			race.classList.remove("show")
			race.classList.add("add")

			ide.classList.remove("show")
			ide.classList.add("hide")

			work.classList.remove("show")
			work.classList.add("hide")

			caps.classList.remove("show")
			caps.classList.add("hide")

			tabs.classList.remove("show")
			tabs.classList.add("hide")

			ftech.classList.remove("show")
			ftech.classList.add("hide")
			

		}else if (comp == soft){
		tech.classList.remove("show")
		tech.classList.add("hide")

		soft.classList.remove("hide")
		soft.classList.add("show")

			age.classList.remove("show")
			age.classList.add("hide")

			gender.classList.remove("show")
			gender.classList.add("hide")

			ops.classList.remove("show")
			ops.classList.add("hide")

			race.classList.remove("show")
			race.classList.add("hide")

			ide.classList.remove("show")
			ide.classList.add("hide")

			work.classList.remove("show")
			work.classList.add("hide")

			caps.classList.remove("show")
			caps.classList.add("hide")

			tabs.classList.remove("show")
			tabs.classList.add("hide")

			ftech.classList.remove("show")
			ftech.classList.add("hide")
			

		}		else if (comp == age){
		tech.classList.remove("show")
		tech.classList.add("hide")
	
		soft.classList.remove("show")
		soft.classList.add("hide")
	
		age.classList.remove("hide")
		age.classList.add("show")
	
		gender.classList.remove("show")
		gender.classList.add("hide")
	
		ops.classList.remove("show")
		ops.classList.add("hide")

		race.classList.remove("show")
		race.classList.add("hide")

		ide.classList.remove("show")
		ide.classList.add("hide")

		work.classList.remove("show")
		work.classList.add("hide")

		caps.classList.remove("show")
		caps.classList.add("hide")

		tabs.classList.remove("show")
		tabs.classList.add("hide")

		ftech.classList.remove("show")
		ftech.classList.add("hide")

	}
		else if (comp == gender){
		tech.classList.remove("show")
		tech.classList.add("hide")
		
		soft.classList.remove("show")
		soft.classList.add("hide")
		
		age.classList.remove("show")
		age.classList.add("hide")
		
		gender.classList.remove("hide")
		gender.classList.add("show")
		
		ops.classList.remove("show")
		ops.classList.add("hide")

		race.classList.remove("show")
		race.classList.add("hide")

		ide.classList.remove("show")
		ide.classList.add("hide")

		work.classList.remove("show")
		work.classList.add("hide")

		caps.classList.remove("show")
		caps.classList.add("hide")

		tabs.classList.remove("show")
		tabs.classList.add("hide")

		ftech.classList.remove("show")
		ftech.classList.add("hide")
	}
		else if (comp == ops){
			tech.classList.remove("show")
						tech.classList.add("hide")
			
						soft.classList.remove("show")
						soft.classList.add("hide")
			
						age.classList.remove("show")
						age.classList.add("hide")
			
						gender.classList.remove("show")
						gender.classList.add("hide")
			
						ops.classList.remove("hide")
						ops.classList.add("show")

						race.classList.remove("show")
						race.classList.add("hide")

						ide.classList.remove("show")
							ide.classList.add("hide")

						work.classList.remove("show")
						work.classList.add("hide")

						caps.classList.remove("show")
						caps.classList.add("hide")

						tabs.classList.remove("show")
						tabs.classList.add("hide")

						ftech.classList.remove("show")
						ftech.classList.add("hide")
		}
						else if (comp == race){
							tech.classList.remove("show")
							tech.classList.add("hide")
				
							soft.classList.remove("show")
							soft.classList.add("hide")
				
							age.classList.remove("show")
							age.classList.add("hide")
				
							gender.classList.remove("show")
							gender.classList.add("hide")
				
							ops.classList.remove("show")
							ops.classList.add("hide")

							race.classList.remove("hide")
							race.classList.add("show")

							ide.classList.remove("show")
							ide.classList.add("hide")

							work.classList.remove("show")
							work.classList.add("hide")

							caps.classList.remove("show")
							caps.classList.add("hide")

							tabs.classList.remove("show")
							tabs.classList.add("hide")

							ftech.classList.remove("show")
							ftech.classList.add("hide")
		}
						else if (comp == ide){
							tech.classList.remove("show")
							tech.classList.add("hide")
				
							soft.classList.remove("show")
							soft.classList.add("hide")
				
							age.classList.remove("show")
							age.classList.add("hide")
				
							gender.classList.remove("show")
							gender.classList.add("hide")
				
							ops.classList.remove("show")
							ops.classList.add("hide")

							race.classList.remove("show")
							race.classList.add("hide")

							ide.classList.remove("hide")
							ide.classList.add("show")

							work.classList.remove("show")
							work.classList.add("hide")

							caps.classList.remove("show")
							caps.classList.add("hide")

							tabs.classList.remove("show")
							tabs.classList.add("hide")

							ftech.classList.remove("show")
							ftech.classList.add("hide")

						}
						else if (comp == work){
							tech.classList.remove("show")
							tech.classList.add("hide")
				
							soft.classList.remove("show")
							soft.classList.add("hide")
				
							age.classList.remove("show")
							age.classList.add("hide")
				
							gender.classList.remove("show")
							gender.classList.add("hide")
				
							ops.classList.remove("show")
							ops.classList.add("hide")

							race.classList.remove("show")
							race.classList.add("hide")

							ide.classList.remove("show")
							ide.classList.add("hide")

							work.classList.remove("hide")
							work.classList.add("show")

							caps.classList.remove("show")
							caps.classList.add("hide")

							tabs.classList.remove("show")
							tabs.classList.add("hide")

							ftech.classList.remove("show")
							ftech.classList.add("hide")

						}
						else if (comp == caps){
							tech.classList.remove("show")
							tech.classList.add("hide")
				
							soft.classList.remove("show")
							soft.classList.add("hide")
				
							age.classList.remove("show")
							age.classList.add("hide")
				
							gender.classList.remove("show")
							gender.classList.add("hide")
				
							ops.classList.remove("show")
							ops.classList.add("hide")

							race.classList.remove("show")
							race.classList.add("hide")

							ide.classList.remove("show")
							ide.classList.add("hide")

							work.classList.remove("show")
							work.classList.add("hide")

							caps.classList.remove("hide")
							caps.classList.add("show")

							tabs.classList.remove("show")
							tabs.classList.add("hide")

							ftech.classList.remove("show")
							ftech.classList.add("hide")

						}
							else if (comp == tabs){
								tech.classList.remove("show")
								tech.classList.add("hide")
					
								soft.classList.remove("show")
								soft.classList.add("hide")
					
								age.classList.remove("show")
								age.classList.add("hide")
					
								gender.classList.remove("show")
								gender.classList.add("hide")
					
								ops.classList.remove("show")
								ops.classList.add("hide")
	
								race.classList.remove("show")
								race.classList.add("hide")
	
								ide.classList.remove("show")
								ide.classList.add("hide")
	
								work.classList.remove("show")
								work.classList.add("hide")
	
								caps.classList.remove("show")
								caps.classList.add("hide")
	
								tabs.classList.remove("hide")
								tabs.classList.add("show")

								ftech.classList.remove("show")
								ftech.classList.add("hide")
							}
							else if (comp == ftech){
								tech.classList.remove("show")
								tech.classList.add("hide")
					
								soft.classList.remove("show")
								soft.classList.add("hide")
					
								age.classList.remove("show")
								age.classList.add("hide")
					
								gender.classList.remove("show")
								gender.classList.add("hide")
					
								ops.classList.remove("show")
								ops.classList.add("hide")
	
								race.classList.remove("show")
								race.classList.add("hide")
	
								ide.classList.remove("show")
								ide.classList.add("hide")
	
								work.classList.remove("show")
								work.classList.add("hide")
	
								caps.classList.remove("show")
								caps.classList.add("hide")
	
								tabs.classList.remove("show")
								tabs.classList.add("hide")

								ftech.classList.remove("hide")
								ftech.classList.add("show")

		}else{
			console.log("False...");
		}
	}
}
