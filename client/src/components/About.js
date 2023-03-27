import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


import katie from "../images/Katie.png";
import lyon from "../images/Lyon.png";
import samma from "../images/Samma.png";
import account from "../images/account.png";
import packaging from "../images/packaging.png";
import surprise_box from "../images/surprise_box.png";

export default function About(props) {
	return (
		<div>
			<h1>About us</h1>
			<p>
				Welcome to Snazzy Snacks, the snack subscription service that's here to
				satisfy your cravings and put a smile on your face! We know that
				snacking is serious business, and we take it just as seriously as you
				do. At Snazzy Snacks, we believe that snacking should be an adventure.
				That's why we've scoured the world for the most delicious, unusual, and
				downright quirky snacks we could find. From spicy chips to sweet treats,
				we've got it all, and we're constantly on the hunt for the next big
				thing in snacking. So if you're ready to join the Snazzy Snacks party,
				sign up today and let us take care of your snacking needs. Who knows,
				you might even discover your new favorite snack!
			</p>
			<h2>Meet the team</h2>
			<div>
				<div>
					<img
						className="avatar"
						src={katie}
						alt="Katie"
					/>
					<p>KATIE</p>
				</div>

				<div>
					<img
						className="avatar"
						src={lyon}
						alt="Lyon"
					/>
					<p>LYON</p>
				</div>
				<div>
					<img
						className="avatar"
						src={samma}
						alt="Samma"
					/>
					<p>SAMMA</p>
				</div>
			</div>

			<h2>How it works</h2>
			<div>
				<div>
					<img
						className="account-how"
						src={account}
						alt="Create account"
					/>
					<h3>Create account</h3>
					<p>Create a customer account to keep track of your subscription</p>
                </div>
                <div>
					<img
						className="packaging-how"
						src={packaging}
						alt="Three packages"
					/>
					<h3>Select a size</h3>
					<p>Choose between three sizes of monthly boxes: Tier 1, Tier 2, or Tier 3</p>
                </div>
                <div>
					<img
						className="surprise-how"
						src={surprise_box}
						alt="Surprise box"
					/>
					<h3>Select a size</h3>
					<p>Choose between three sizes of monthly boxes: Tier 1, Tier 2, or Tier 3</p>
                </div>
            </div>
            <div>
        {props.cookieValue ? 
          <Link to="/account">
            <Button>GET SNACKING!</Button>
          </Link>
        :
          <Link to="/login">
            <Button>GET SNACKING!</Button>
          </Link>
        }
        
      </div>
		</div>
	);
}
