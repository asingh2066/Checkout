import React from 'react';

function App() {
  return (
    <div className="App" style={{float : 'left', width : '60%'}}>
      <form class="needs-validation" novalidate>
          <h1>Billing Address</h1>
        <div class="form-row">
          <div class="col-md-4 mb-3"  class="col-auto">
            <label for="validationCustom01">First name</label>
            <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3"  class="col-auto">
            <label for="validationCustom02">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3" class="col-auto">
            <label for="validationCustomUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
              </div>
              <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-10 mb-3">
              <label for="validationCustom03">Address</label>
              <input type="text" class="form-control" id="validationCustom03" placeholder="Address" required/>
              <div class="invalid-feedback">
                Please provide a valid address.
              </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3" class="col-auto">
            <label for="validationCustom03">City</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="City" required/>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3" class="col-auto">
            <label for="validationCustom04">State</label>
            <input type="text" class="form-control" id="validationCustom04" placeholder="State" required/>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="form-group col-md-3">
            <label for="inputState">Country</label>
            <select id="inputState" class="form-control">
              <option>United States</option>
              <option>Canada</option>
            </select>
          </div>
          <div class="col-md-2 mb-3">
            <label for="validationCustom05">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required/>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-10 mb-3">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">
              Shipping address is the same as my billing address
            </label>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">
              Remember this information
            </label>
          </div>
        </div>
          
          
          
        <h1>Shipping Address</h1>
        <div class="form-row">
          <div class="col-md-4 mb-3"  class="col-auto">
            <label for="validationCustom01">First name</label>
            <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3"  class="col-auto">
            <label for="validationCustom02">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3" class="col-auto">
            <label for="validationCustomUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
              </div>
              <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-10 mb-3">
              <label for="validationCustom03">Address</label>
              <input type="text" class="form-control" id="validationCustom03" placeholder="Address" required/>
              <div class="invalid-feedback">
                Please provide a valid address.
              </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3" class="col-auto">
            <label for="validationCustom03">City</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="City" required/>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3" class="col-auto">
            <label for="validationCustom04">State</label>
            <input type="text" class="form-control" id="validationCustom04" placeholder="State" required/>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="form-group col-md-3">
            <label for="inputState">Country</label>
            <select id="inputState" class="form-control">
              <option>United States</option>
              <option>Canada</option>
            </select>
          </div>
          <div class="col-md-2 mb-3">
            <label for="validationCustom05">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required/>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-10 mb-3">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
          </div>
        </div>
          
        
        <h1>Payment</h1>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
          <label class="custom-control-label" for="customRadio1">Credit Card</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
          <label class="custom-control-label" for="customRadio2">Debit Card</label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input"/>
          <label class="custom-control-label" for="customRadio3">Paypal</label>
        </div>
          
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01">Name on Card</label>
            <input type="text" class="form-control" id="validationCustom01" placeholder="e.g. Joe Smtih" required/>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom05">Card Number</label>
            <input type="text" class="form-control" id="validationCustom05" placeholder="Enter card" required/>
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
          
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label for="validationCustom05">Expiration Date</label>
            <input type="text" class="form-control" id="validationCustom05" placeholder="Enter expiration" required/>
            <div class="invalid-feedback">
              Please provide a valid expiration.
            </div>
          </div>
          <div class="col-md-2 mb-3">
            <label for="validationCustom05">CVV</label>
            <input type="text" class="form-control" id="validationCustom05" placeholder="Enter CVV" required/>
            <div class="invalid-feedback">
              Please provide a valid CVV.
            </div>
          </div>
        </div>
          
        
          
          
        <button class="btn btn-primary" type="submit">Continue to Checkout</button>
      </form>
    </div>
  );
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

export default App;
