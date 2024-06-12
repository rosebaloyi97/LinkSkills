import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';


@Component({
  selector: 'Modal',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
<div *ngIf="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <!-- Heroicon name: outline/exclamation -->

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900 capitalize" id="modal-title">
              congratulations {{storeService.user.name}}
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
              We will be in contact with you soon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
       
        <button
          (click)="navigateTo('')"
          type="button" class="bg-gray-50 px-9 py-1 rounded-full text-sm font-extrabold border-gray-200 border-4 hover:bg-gray-200 hover:shadow">
          DONE
        </button>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  @Input('showModal') showModal: boolean;

  constructor (
    public storeService: StoreService,
    private router: Router) { }

  ngOnInit (): void {
  }

  // Method that clears user object of user and index.
  clearStorage (): void {
    localStorage.removeItem('user');
    localStorage.removeItem('index');
  }

  // Method that navigates to specified url.
  navigateTo (url: string) {
    // clear local storage after naviagating.
    localStorage.clear();
    this.storeService.setUser({ name: undefined, organisationName: undefined, email: undefined});
    
    // navigate to specifed url endpoint.
    this.router.navigate([ url ]);
    
  }

}
