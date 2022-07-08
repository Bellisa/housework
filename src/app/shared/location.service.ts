import { Injectable } from '@angular/core';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { LocationModel } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  async getLocation(id: string): Promise<LocationModel | null> {
    const result = await DataStore.query(LocationModel, id);

    return result ? result : null;
  }

  async getLocations(): Promise<LocationModel[]> {
    const locations = await DataStore.query(LocationModel, Predicates.ALL, {
      sort: s => s.name(SortDirection.ASCENDING)
    });
    
    return locations ? locations : [];
  }

  async save(locationModel: LocationModel) {
    return await DataStore.save(locationModel);
  }
  
  async update(id: string, name: string, imageUrl: string){
    const original = await DataStore.query(LocationModel, id);
    if(original){
      await DataStore.save(LocationModel.copyOf(original, updated => {
        updated.name = name,
        updated.image_url = imageUrl?imageUrl : original.image_url
      }));
      return true;
    }
    return false;
  }
}
