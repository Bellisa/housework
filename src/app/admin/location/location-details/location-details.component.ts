import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/shared/location.service';
import { LocationModel } from 'src/models';

@Component({
	selector: 'app-location-details',
	templateUrl: './location-details.component.html',
	styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

	private locationId: string;
	private locationModel: LocationModel | null | undefined;
	public locationForm: FormGroup;
	public responseError = '';

	constructor(private router: Router, private route: ActivatedRoute, private locationService: LocationService) {
		this.locationForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			image_url: new FormControl('', [Validators.required])
		});

		this.locationId = this.route.snapshot.params['id'];
	}
	ngOnInit(): void {
		if(this.locationId) {
			this.locationService.getLocation(this.locationId).then(location=>{
				if(location){
					this.locationModel = location;
					this.locationForm.patchValue({
						name: location.name,
						image_url: location.image_url
					});
				}
			})
		}
		
	}

	isFormControlInvalid(controlName: string): boolean {
		const formControl = this.locationForm.get(controlName);

		return !formControl || (formControl.invalid || !formControl.value.trim()) && (formControl.touched || formControl.dirty);
	}

	onSubmit() {
		if (this.locationForm.valid) {
			const { name, image_url } = this.locationForm.value;

			if (!name.trim() || !image_url.trim()) {
				return;
			}
			let location;
			if(this.locationId && this.locationModel) {
				const result = this.locationService.update(this.locationId, name, image_url);
				console.log('result',result)
			} else {
				const result = this.locationService.save(new LocationModel({name, image_url, CleanPlaceModels: []}))
				console.log('result',result)
			}
			
			this.responseError = '';
		}
	}

}
