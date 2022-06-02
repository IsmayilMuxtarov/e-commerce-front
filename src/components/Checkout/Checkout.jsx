import React from 'react';

export const Checkout = () => {
    return (
        <main id="content" role="main">
            {/* Content  */}
            {/*Content*/}
            <div className="container content-space-1 content-space-lg-2">
                <div className="row">
                    <div className="col-lg-8 mb-7 mb-lg-0">
                        <h4 className="mb-3">Billing address</h4>

                        {/* Form  */}
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstNameShopCheckout" className="form-label">First name</label>
                                    <input type="text" className="form-control form-control-lg"
                                           id="firstNameShopCheckout" placeholder="" value="" required/>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-sm-6">
                                    <label htmlFor="lastNameShopCheckout" className="form-label">Last name</label>
                                    <input type="text" className="form-control form-control-lg"
                                           id="lastNameShopCheckout" placeholder="" value="" required/>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-12">
                                    <label htmlFor="emailShopCheckout" className="form-label">Email</label>
                                    <input type="email" className="form-control form-control-lg" id="emailShopCheckout"
                                           placeholder="you@example.com"/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-12">
                                    <label htmlFor="addressShopCheckout" className="form-label">Address</label>
                                    <input type="text" className="form-control form-control-lg" id="addressShopCheckout"
                                           placeholder="1234 Main St" required/>
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-12">
                                    <label htmlFor="address2ShopCheckout" className="form-label">Address 2 <span
                                        className="form-label-secondary">(Optional)</span></label>
                                    <input type="text" className="form-control form-control-lg"
                                           id="address2ShopCheckout" placeholder="Apartment or suite"/>
                                </div>
                                {/* End Col  */}

                                <div className="col-md-5">
                                    <label htmlFor="countryShopCheckout" className="form-label">Country</label>

                                    {/* Select  */}
                                    <select className="form-select" id="countryShopCheckout" required>
                                        <option value="">Choose...</option>
                                        <option value="">Select country</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Åland Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia, Plurinational State of</option>
                                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">Bouvet Island</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="BN">Brunei Darussalam</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos (Keeling) Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">Congo, the Democratic Republic of the</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">Côte d'Ivoire</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curaçao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="TF">French Southern Territories</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">Heard Island and McDonald Islands</option>
                                        <option value="VA">Holy See (Vatican City State)</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran, Islamic Republic of</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                        <option value="KR">Korea, Republic of</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Lao People's Democratic Republic</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia, Federated States of</option>
                                        <option value="MD">Moldova, Republic of</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestinian Territory, Occupied</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Réunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russian Federation</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthélemy</option>
                                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin (French part)</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten (Dutch part)</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syrian Arab Republic</option>
                                        <option value="TW">Taiwan, Province of China</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania, United Republic of</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                        <option value="UM">United States Minor Outlying Islands</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela, Bolivarian Republic of</option>
                                        <option value="VN">Viet Nam</option>
                                        <option value="VG">Virgin Islands, British</option>
                                        <option value="VI">Virgin Islands, U.S.</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
                                    {/* End Select  */}

                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-md-4">
                                    <label htmlFor="stateShopCheckout" className="form-label">State</label>

                                    {/* Select  */}
                                    <select className="form-select" id="stateShopCheckout" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    {/* End Select  */}

                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-md-3">
                                    <label htmlFor="zipShopCheckout" className="form-label">Zip</label>
                                    <input type="text" className="form-control form-control-lg" id="zipShopCheckout"
                                           placeholder="" required/>
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                                {/* End Col  */}
                            </div>

                            <hr className="my-4"/>

                            <div className="d-grid gap-2">
                                {/* Check  */}
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input"
                                           id="sameAddressShopCheckout"/>
                                    <label className="form-check-label" htmlFor="sameAddressShopCheckout">Shipping
                                        address is the same as my billing address</label>
                                </div>
                                {/* End Check  */}

                                {/* Check  */}
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="saveInfoShopCheckout"/>
                                    <label className="form-check-label" htmlFor="saveInfoShopCheckout">Save this
                                        information for next time</label>
                                </div>
                                {/* End Check  */}
                            </div>

                            <hr className="my-4"/>

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                {/* Check  */}
                                <div className="form-check">
                                    <input id="creditShopCheckout" name="paymentMethod" type="radio"
                                           className="form-check-input" checked required/>
                                    <label className="form-check-label" htmlFor="creditShopCheckout">Credit
                                        card</label>
                                </div>
                                {/* End Check  */}

                                {/* Check  */}
                                <div className="form-check">
                                    <input id="debitShopCheckout" name="paymentMethod" type="radio"
                                           className="form-check-input" required/>
                                    <label className="form-check-label" htmlFor="debitShopCheckout">Debit
                                        card</label>
                                </div>
                                {/* End Check  */}

                                {/* Check  */}
                                <div className="form-check">
                                    <input id="paypalShopCheckout" name="paymentMethod" type="radio"
                                           className="form-check-input" required/>
                                    <label className="form-check-label"
                                           htmlFor="paypalShopCheckout">PayPal</label>
                                </div>
                                {/* End Check  */}
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="ccNameShopCheckout" className="form-label">Name on
                                        card</label>
                                    <input type="text" className="form-control form-control-lg"
                                           id="ccNameShopCheckout" placeholder="" required/>
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-md-6">
                                    <label htmlFor="ccNumberShopCheckout" className="form-label">Credit card
                                        number</label>
                                    <input type="text" className="form-control form-control-lg"
                                           id="ccNumberShopCheckout" placeholder="" required/>
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-md-3">
                                    <label htmlFor="ccExpirationShopCheckout"
                                           className="form-label">Expiration</label>
                                    <input type="text" className="form-control form-control-lg"
                                           id="ccExpirationShopCheckout" placeholder="" required/>
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-md-3">
                                    <label htmlFor="ccCvvShopCheckout" className="form-label">CVV</label>
                                    <input type="text" className="form-control form-control-lg"
                                           id="ccCvvShopCheckout" placeholder="" required/>
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                                {/* End Col  */}
                            </div>
                            {/* End Row  */}

                            <hr className="my-4"/>

                            <div className="row align-items-center">
                                <div className="col-sm-6 order-sm-1 mb-3 mb-sm-0">
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">Place
                                            order
                                        </button>
                                    </div>
                                </div>
                                {/* End Col  */}

                                <div className="col-sm text-center text-sm-start">
                                    <a className="link" href="../demo-shop/cart.html">
                                        <i className="bi-chevron-left small ms-1"/> Return to cart
                                    </a>
                                </div>
                                {/* End Col  */}
                            </div>
                            {/* End Row  */}
                        </form>
                        {/* End Form  */}
                    </div>
                    {/* End Col  */}

                    <div className="col-lg-4">
                        <div className="ps-lg-4">
                            {/* Card  */}
                            <div className="card card-sm shadow-sm mb-4">
                                <div className="card-body">
                                    <div className="border-bottom pb-4 mb-4">
                                        <h3 className="card-header-title">Order summary</h3>
                                    </div>

                                    <form>
                                        {/* Product  */}
                                        <div className="border-bottom pb-4 mb-4">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar avatar-lg me-3">
                                                        <img className="avatar-img" src="../assets/img/320x320/img2.jpg"
                                                             alt="Image Description"/>
                                                        <sup className="avatar-status avatar-status-primary">1</sup>
                                                    </div>
                                                </div>

                                                <div className="flex-grow-1">
                                                    <h6>Originals national backpack</h6>

                                                    <div className="d-grid">
                                                        <div className="text-body">
                                                            <span className="small">Gender:</span>
                                                            <span className="small">Men</span>
                                                        </div>

                                                        <div className="text-body">
                                                            <span className="small">Color:</span>
                                                            <span className="small">Grey</span>
                                                        </div>

                                                        <div className="text-body">
                                                            <span className="small">Size:</span>
                                                            <span className="small">One size</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Product  */}

                                        {/* Product  */}
                                        <div className="border-bottom pb-4 mb-4">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar avatar-lg me-3">
                                                        <img className="avatar-img" src="../assets/img/320x320/img3.jpg"
                                                             alt="Image Description"/>
                                                        <sup className="avatar-status avatar-status-primary">1</sup>
                                                    </div>
                                                </div>

                                                <div className="flex-grow-1">
                                                    <h6>Vans large image t-shirt</h6>

                                                    <div className="d-grid">
                                                        <div className="text-body">
                                                            <span className="small">Gender:</span>
                                                            <span className="small">Women</span>
                                                        </div>

                                                        <div className="text-body">
                                                            <span className="small">Color:</span>
                                                            <span className="small">Core Black / Carbon</span>
                                                        </div>

                                                        <div className="text-body">
                                                            <span className="small">Size:</span>
                                                            <span className="small">S</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Product  */}

                                        <div className="border-bottom pb-4 mb-3">
                                            <input type="text" className="form-control" name="name"
                                                   placeholder="Enter promo code" aria-label="Enter promo code"/>
                                        </div>

                                        <div className="border-bottom pb-4 mb-4">
                                            <div className="d-grid gap-3">
                                                <dl className="row">
                                                    <dt className="col-sm-6">Item subtotal (2)</dt>
                                                    <dd className="col-sm-6 text-sm-end mb-0">$73.98</dd>
                                                </dl>
                                                {/* End Row  */}

                                                <dl className="row">
                                                    <dt className="col-sm-6">Delivery</dt>
                                                    <dd className="col-sm-6 text-sm-end mb-0">Free</dd>
                                                </dl>
                                                {/* End Row  */}
                                            </div>
                                        </div>

                                        <div className="border-bottom pb-4 mb-4">
                                            <div className="d-grid gap-3">
                                                {/* Check  */}
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                           name="deliveryRadioName" id="deliveryRadio1" checked/>
                                                    <label className="form-check-label text-dark"
                                                           htmlFor="deliveryRadio1">
                                                        Free - Standard delivery
                                                        <span className="d-block text-muted small">Shipment may take 5-6 business days</span>
                                                    </label>
                                                </div>
                                                {/* End Check  */}

                                                {/* Check  */}
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                           name="deliveryRadioName" id="deliveryRadio2"/>
                                                    <label className="form-check-label text-dark"
                                                           htmlFor="deliveryRadio2">
                                                        $7.99 - Express delivery
                                                        <span className="d-block text-muted small">Shipment may take 2-3 business days</span>
                                                    </label>
                                                </div>
                                                {/* End Check  */}
                                            </div>
                                        </div>

                                        <div className="d-grid gap-3 mb-4">
                                            <dl className="row">
                                                <dt className="col-sm-6">Estimated tax</dt>
                                                <dd className="col-sm-6 text-sm-end mb-0">$0.00</dd>
                                            </dl>
                                            {/* End Row  */}

                                            <dl className="row">
                                                <dt className="col-sm-6">Total</dt>
                                                <dd className="col-sm-6 text-sm-end mb-0">$73.98</dd>
                                            </dl>
                                            {/* End Row  */}
                                        </div>

                                        <div className="d-grid">
                                            <a className="btn btn-primary btn-lg"
                                               href="../demo-shop/checkout.html">Checkout</a>
                                        </div>
                                    </form>
                                </div>
                                {/* End Card  */}
                            </div>
                        </div>
                    </div>
                    {/* End Col  */}
                </div>
                {/* End Row  */}
            </div>
            {/* End Content  */}
        </main>
    )
}