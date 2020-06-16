# Virket's Website core module
  Module that implements
  * Types (interfaces)
  * Model
  * Repository
  * Service
  * State management (actions, effects, reducers, selectors)

## Using your module in an Ionic 5 app

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
...

// Import the module
import { WebsiteCoreModule } from '@virket/website-core/dist/src';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ...
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ...
    WebsiteCoreModule.forRoot({
      apiUrl: environment.apiUrl,
      instanceName: environment.instanceName
    }),
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
