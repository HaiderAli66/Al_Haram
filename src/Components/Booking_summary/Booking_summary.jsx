import React from "react";
import "./Booking_summary.css";
import { VscCircleOutline } from "react-icons/vsc";
import { VscCircleFilled } from "react-icons/vsc";
import IndiGo from "../../Assets/IndiGo.png";
import IndiGo_big from "../../Assets/IndiGo_big.png";
import Plane from "../../Assets/Plane.png";
import Ellipse from "../../Assets/Ellipse.png";
import hand from "../../Assets/hand.png";
import { Form } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Booking_summary() {
  return (
    <div>
      <div className="summary_nev">
        <h3>Booking Summary</h3>
      </div>

      <div className=" summary_main">
        <div className=" ticket_first_line summary_first_line">
          <div className="row ticket_roww summary_row">
            <div className="col-md-2 coll_12">
              <div className="ticket_first sumary_indigo">
                <img className="ticket_indigo_img" src={IndiGo_big} alt="" />
                <div className="summary_text">
                  <h5 className="ps-2">INDIGO</h5>
                  <p className="ps-3">(IN-855)</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 coll_12">
              <div className="ticket_first pt-2 text-center">
                <h4>21:40</h4>
                <h5>DELHI(T: 1D)</h5>
                <p>TUE,30AUG 2022</p>
              </div>
            </div>

            <div className="col-md-2 coll_12">
              <div className="ticket_first pt-3">
                <p className="text-center">1H 20M (DIRECT)</p>
                <div className="emg_group">
                  {" "}
                  <VscCircleOutline /> <VscCircleFilled /> <VscCircleFilled />{" "}
                  <VscCircleFilled /> <VscCircleFilled />{" "}
                  <img src={Plane} alt="" />
                  <VscCircleFilled /> <VscCircleFilled /> <VscCircleFilled />{" "}
                  <VscCircleFilled />
                  <VscCircleOutline />
                </div>
                <p className="text-center">NON-STOP</p>
              </div>
            </div>

            <div className="col-md-2 coll_12">
              <div className="ticket_first py-2 text-center">
                <h4>23:55</h4>
                <h5>MECCA(T: 2D)</h5>
                <p>TUE,30AUG 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" ticket_first_line summary_first_line">
          <div className="row ticket_roww summary_row">
            <div className="col-md-2 coll_12">
              <div className="ticket_first sumary_indigo">
                <img className="ticket_indigo_img" src={IndiGo_big} alt="" />
                <div className="summary_text">
                  <h5 className="ps-2">INDIGO</h5>
                  <p className="ps-3">(IN-855)</p>
                </div>
              </div>
            </div>

            <div className="col-md-2 coll_12">
              <div className="ticket_first pt-2 text-center">
                <h4>21:40</h4>
                <h5>DELHI(T: 1D)</h5>
                <p>TUE,30AUG 2022</p>
              </div>
            </div>

            <div className="col-md-2 coll_12">
              <div className="ticket_first pt-3">
                <p className="text-center">1H 20M (DIRECT)</p>
                <div className="emg_group">
                  {" "}
                  <VscCircleOutline /> <VscCircleFilled /> <VscCircleFilled />{" "}
                  <VscCircleFilled /> <VscCircleFilled />{" "}
                  <img src={Plane} alt="" />
                  <VscCircleFilled /> <VscCircleFilled /> <VscCircleFilled />{" "}
                  <VscCircleFilled />
                  <VscCircleOutline />
                </div>
                <p className="text-center">NON-STOP</p>
              </div>
            </div>

            <div className="col-md-2 coll_12">
              <div className="ticket_first py-2 text-center">
                <h4>23:55</h4>
                <h5>MECCA(T: 2D)</h5>
                <p>TUE,30AUG 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="traveler_main">
          <h3 className="text-center py-3">Traveller Details</h3>
          <div className="traveler_box">
            <div className="travele_first_enput_line mb-4">
              <div className="traveler_box_text">
                <h4>Adult</h4>
                <p>Name should be same as in passport</p>
              </div>
              <div className="travel_enputs mt-3">
                <div className="col-md-3">
                  <DropdownButton
                    className="drop_bttn travel_drop "
                    id="dropdown-basic-button"
                    title="Title"
                  ></DropdownButton>
                </div>
                <div className="col-md-3 travel_first_enput">
                  <input className="traveller_enput" type="text" placeholder="First Name" />
                </div>

                <div className="col-md-3 travel_first_enput me-2">
                  <input className="traveller_enput" type="text" placeholder="First Name" />
                </div>
              </div>
            </div>

            <div className="travele_first_enput_line my-4">
              <div className="traveler_box_text">
                <h4 className="pt-3">Contact Details</h4>
                <p>
                  Your mobile number will be used only for sending flight
                  related communication
                </p>
              </div>
              <div className="travel_enputs mt-3">
                <div className="col-md-5">
                  <DropdownButton
                    className="drop_bttn travel_drop "
                    id="dropdown-basic-button"
                    title="Title"
                  ></DropdownButton>
                </div>
              </div>
            </div>

            <div className="travel_bttn_line mt-">
              <div className="container">
                <div className="row mt-5 mb-3">
                  <div className="col-md-2"></div>
                  <div className="col-md-2">
                    <div className="btn book text-center">Add Adult</div>
                  </div>

                  <div className="col-md-2">
                    <div className="btn book text-center">Add Seats</div>
                  </div>

                  <div className="col-md-2">
                    <div className="btn book text-center">Add Meals</div>
                  </div>

                  <div className="col-md-2">
                    <div className="btn book text-center">Add Bagagge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fair_visa">
            <div className="fair_visa_header">
              <div class="dropdown">
                <button
                  class="btn fair_visa_bttn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FAIR RULES
                </button>
                <ul class="dropdown-menu fair_visa_summary pt-3">
                  <li>
                    <a class="dropdown-item " href="#">
                      <div className="tabel_element">
                      <table className="fair_rules_tabel table-responsive">
                        <tr>
                          <th className="thh">
                            Time Frame To Cancel
                            <p className="fs_6">
                              Before Scheduled Departure Time
                            </p>
                          </th>
                          <th className="thh">
                            Airline Fees<p className="fs_6">Per Person</p>
                          </th>
                          <th className="thh">
                            Al Haram Fees<p className="fs_6">Per Person</p>
                          </th>
                        </tr>
                        <tr>
                          <td>Cancel Before 72 Hours Of Departure Time</td>
                          <td>Rs 4000</td>
                          <td>Rs 500</td>
                        </tr>
                        <tr>
                          <td>
                            Cancel Within 72 Hours & Before 4 Hours Of Departure
                            Time
                          </td>
                          <td>Rs 5000</td>
                          <td>Rs 500</td>
                        </tr>
                      </table>
                      </div>


                      <div className="tabel_element">
                      <table className="mt-4">
                        <tr>
                          <th className="thh">
                            Time To Reshedule
                            <p className="fs_6">
                              Before Scheduled Departure Time
                            </p>
                          </th>
                          <th className="thh">
                            Airline Fees<p className="fs_6">Per Person</p>
                          </th>
                          <th className="thh">
                            Al Haram Fees<p className="fs_6">Per Person</p>
                          </th>
                        </tr>
                        <tr>
                          <td>Cancel Before 72 Hours Of Departure Time</td>
                          <td>Rs 4000</td>
                          <td>Rs 500</td>
                        </tr>
                        <tr>
                          <td>
                            Cancel Within 72 Hours & Before 4 Hours Of Departure
                            Time
                          </td>
                          <td>Rs 5000</td>
                          <td>Rs 500</td>
                        </tr>
                      </table>
                      </div>

                      <div className="fair_visa_text">
                        <h5 className="text-center">TERMS AND CONDITIONS</h5>
                        <p className="text-center">
                          Total Rescheduling Charges Airlines Rescheduling fees<br></br>
                          Fare Difference if applicable + EaseMyTrip<br></br> Fees The
                          airline cancel reschedule<br></br> fees is indicative
                          and can be changed without any prior<br></br> notice by the
                          airlines. EaseMyTrip does not guarantee the<br></br>
                          accuracy of cancel reschedule fees.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button
                  class="btn fair_visa_bttn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BAGGAGE
                </button>
                <ul class="dropdown-menu fair_visa_summary">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div className="baggage">
                        <div className="fare_text">
                          <h6>BAGGAGE SUMMARY</h6>
                          <h6>DETAILS</h6>
                        </div>
                        <div className="fare_amount">
                          <span>Check In Baggage</span>
                          <span>
                            15 Kg (One Piece Only) - Each Adult & Child
                          </span>
                        </div>
                        <div className="fare_amount">
                          <span>Hand BAGGAGE</span>
                          <span className="p_6">7 Kg - Each Adult & Child</span>
                        </div>
                        <div className="fare_text pt-4">
                          <h6>BAGGAGE DISCLAIMER</h6>
                        </div>
                        <div className="baggage_list">
                          <ul>
                            <li className="py-2">
                              <span className="tital"> Hand Baggage</span>
                              <span className="tital_detail">
                                : Airlines Permits Only One (1pc) Bag Weighing
                                Not More Than 7 KGS. In Addition To The One
                                Piece Of Hand Baggage Permitted,<br></br> Few
                                Airlines May Permit Customer To Carry One
                                Additional Personal Article Such As Ladies Purse
                                Or A Small Bag Containing Laptop Not Weighing
                                More Than 3 KGS.
                              </span>
                            </li>
                            <li className="py-2">
                              <span className="tital"> Infant Baggage</span>
                              <span className="tital_detail">
                                : Passenger Traveling With Infant Are Allowed To
                                Carry 1 Pc Of Additional Hand Baggage Not
                                Exceeding 7 KGS.{" "}
                              </span>
                            </li>
                            <li className="pt-2">
                              <span className="tital_detail">
                                The Baggage Information Is Just For Reference,
                                Please Check With Airline For More Specific
                                Information.{" "}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="dropdown">
                <button
                  class="btn fair_visa_bttn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  VISA INFO
                </button>
                <ul class="dropdown-menu fair_visa_summary pt-3">
                  <li>
                    <a
                      class="dropdown-item fair_visa_item text-center"
                      href="#"
                    >
                      <h5>VISA INFORMATION</h5>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fair_visa_item" href="#">
                      <p>
                        Please make sure that you have all relevant visa,
                        transit visa (if applicable), immigration clearance and
                        assport with a validity of minimum 6 months from the
                        date of travel.
                      </p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fair_visa_item" href="#">
                      <p>
                        All visa rules on our website are just indicative & are
                        updated with best of our efforts. Please refer official
                        website of the respective country
                      </p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item fair_visa_item" href="#">
                      <p>
                        to explore the complete and accurate requirements.
                        EaseMyTrip will not be liable for any claims about
                        non-travel because of the lack of any document
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="add_travel d-flex">
              <div className="add_travel_emg">
                <img className="hand" src={hand} alt="" />
                <img className="ellipse" src={Ellipse} alt="" />
              </div>
              <div className="add_travel_text">
                <h5>Add Travel Insurance And Secure Your Trip With ACKO Travel Insurance For INR 59/Person</h5>
                <p>(Upon Selecting Travel Insurance ,You Accept The Terms And Conditions Of The Travel Insurance Policy)</p>
              </div>
          </div>

          <div className="add_travel d-flex">
              <div className="">
                <img className="ellipse_2" src={Ellipse} alt="" />
              </div>
              <div className="add_travel_text">
                <h5>Use GST For This Booking</h5>
                <p>(To Claim Credit Of Gst Charged By Airline/Al Haram Please Enter Your Company Gst Number)</p>
              </div>
          </div>

          <div className="good_to_know">
            <h5 className="ps-4">Good To Know</h5>
            <p className="ps-4">Information You Should To Know</p>
            <div className="good_to_know_list pt-3">
              <ul>
                <li><p>Airline Cancellation Fee is Rs 4500 Per Passenger For Your Selected Flight On The Sector Delhi To Dubai</p></li>
                <li><p>Certify Your Health Status Through The Aarogya Setu App Or The Self-Declaration Form At The Airport</p></li>
                <li><p>Remember To Web Check-in Before Arriving At The Airport Face Masks Are Compulsory</p></li>
              </ul>
            </div>
          </div>

          <div className="imp_info">
            <h5 className="ps-4">Important Information</h5>
            <p className="ps-4">Information You Should To Know</p>
            <div className="good_to_know_list pt-3">
              <ul>
                <li><p>Airline Cancellation Fee is Rs 4500 Per Passenger For Your Selected Flight On The Sector Delhi To Dubai</p></li>
                <li><p>Certify Your Health Status Through The Aarogya Setu App Or The Self-Declaration Form At The Airport</p></li>
                <li><p>Remember To Web Check-in Before Arriving At The Airport Face Masks Are Compulsory</p></li>
              </ul>
            </div>
          </div>

          <div className="price_summary">
            <h5 className="text-center">Price Summary</h5>
          <table class="table price_tbl">
  <tbody>
    <tr>
      <td colspan="2">Adult : 1</td>
      <td className="price">28,500.00</td>
    </tr>
    <tr>
      <td colspan="2">All Taxes</td>
      <td className="price">1500.00</td>
    </tr>
    <tr>
      <td className="price grand" colspan="2">Grand Total</td>
      <td className="price grand">30,000.00</td>
    </tr>
  </tbody>
</table>
           
           <div className="price_btn">
            <div className="btn price_bkng">Continue Booking</div>
           </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking_summary;
