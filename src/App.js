import './App.css';

function App() { 
  return (
  <div className="App">
    <nav></nav>
    <div className="cart">
      <img className="left_arrow" src=".\scroll_left.svg.svg" alt="" ></img>
      <div ><p><span>Cart</span> (2 items)</p></div>
    </div>
    <div className="savings">
        <p>Your total savings</p>
        <p>&#8377;750</p>
    </div>
    <div className="celeb_container">
      <div className="celeb">
        <p>Who's celebrating?</p>
        <p>Planning to surprise someone click on 'someone else'</p>
      </div>
      <div className="celeb_buttons">
        <button><p>Myself <img src=".\pen.svg.svg" alt=""></img></p></button>
        <button><p>Someone else</p></button>
      </div>
    </div>
  
    <div className="card_container">
      <div className="card">
        <img src=".\balloon.svg" alt=""></img>
        <div className="card_details">
          <div> 
            <div className="card_title">
              <p>Purple Anniversory Decor with Occasional lighting</p>
            </div>
            <img src=".\delete.svg.svg" alt=""></img>
          </div>
          <div>
            <p>&#8377;2500</p>
            <p>&#8377;5000</p>
            <p>50% OFF</p>
          </div>
          <div>
            <p>Celebrating on <span>Fri, 27 January,7:00 - 9:00 pm </span></p>
          </div>
        </div>
      </div>
      <div className="card_footer">
        <p>Add Ons <img src=".\one.svg" alt=""></img></p> 
        <p>Add more items</p>
      </div>
    </div>
    <div className="card2_container">
      <div className="card2_title">
        <img className="face" src=".\noto_partying-face.svg" alt=""></img>
        <p>Party Add one</p>
      </div>
      <div>
        <button>Balloons</button>
        <button>Foil Balloons</button>
        <button>Occassional Foils</button>
        <button>More Add ons</button>
      </div>
      <div className="list">
        <div >
          <img src=".\C553E9DE-4D55-4F8C-822E-586A7AF17D76 (1).svg" alt=""></img>
          <p>50 Additional Balloons</p>
          <p>Matching to the decor theme</p>
          <div className="price">
            <div> 
              <p>&#8377;100</p>
            </div>
            <div className="Add">Add
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src=".\C553E9DE-4D55-4F8C-822E-586A7AF17D76 (1).svg" alt=""></img>
        <p>50 Additional Balloons</p>
        <p>Matching to the decor theme</p>
        <div className="price">
          <div> 
            <p>&#8377;100</p>
          </div>
          <div className="Add">Add
          </div>
        </div>
      </div>
      <div>
        <img src=".\C553E9DE-4D55-4F8C-822E-586A7AF17D76 (1).svg" alt=""></img>
        <p>50 Additional Balloons</p>
        <p>Matching to the decor theme</p>
        <div className="price">
          <div> <p>&#8377;100</p>
          </div>
          <div className="Add">Add
          </div>
        </div>
      </div>
    </div>  
    <div className="gift_container">
        <div className="offer">
            <div>
                <p>Unlock your free gift!</p>
                <p>Add worth &#8377;432 more to unlock!</p>
            </div>
            <img src=".\Group.svg" alt=""></img>
        </div>
        <div className="offer_pic">
            <img src=".\E203D906-EE2F-4F8F-B445-820A017FCAD2 (1).svg" alt=""></img>
            <div>
                <p>Chocolate brownie</p>
                <p>Free</p>
            </div>
            <div class="locked">
                <img src=".\lock.svg.svg" alt=""></img>
                <p>Locked</p>
            </div>
            <img src=".\Vector.svg" alt=""></img>
        </div> 
    </div>
    <div className="pay_container">
        <div><p>Cart total: <span>&#8377;2500</span> (2 items)</p></div>
        <div className="empty"></div>
        <div >
            <div className="line">
            <p>Save &#8377;500 more on this boking</p>
            <div className="change" >Apply</div>
        </div>
        <div>
            <p>Code: EBONOW</p>
        </div>
        <div><p>View all coupons</p></div>  
        </div>
        <div className="line" > 
            <div>
            <p><span>Home</span> -Raj villa, Ashram Para, Silli ...</p></div>
            <div>Change</div>
        </div>
        <div className="line">
            <div>
            <p><span>Fri Jan 27</span> 7:00 - 9:00pm</p></div>
            <div className="change">Change</div></div>
        <div> <p>
            Proceed to Pay
        </p></div>
    </div>
    <div className="bill">
      <p>Bill summary</p><br></br>
      <p>Base value  &#8377;1000</p><br></br>
      <p>Add Ons &#8377;200</p><br></br>
      <p>Convenience fee &#8377;0</p><br></br>
      <p>Prepaid discount &#8377;500</p>
      <p><b>Amount to be paid</b> <b>&#8377;900</b></p>
      <div><p>&#8377;750 saved on this booking
      </p>
      </div>
      <div>
        <img src=".\Group 704.svg" alt=""></img>
        <b>100% safe and secure</b>
      </div>
    </div>
  </div>
  );
}

export default App;
