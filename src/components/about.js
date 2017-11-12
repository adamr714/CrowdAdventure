import React from 'react';
import {Link} from 'react-router';

export class About extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
      // this.onClick = this.onClick.bind(this);
  }


      render() {
        return(
          <div className="about_us">
            <div className="row">
            <h2 className="white">About Us</h2>
            <p className="pull_quote"><em>Our passion is helping creators bring their idea to life with the help of CrowdFunding!</em></p>
           
             <p>&nbsp;</p>

             <div className="white_background">
                <p><strong>What is CrowdAdventure?</strong><br />
                    CrowdAdventure takes the pressure off of creators by allowing them the freedom of CrowdFunding with the 
                    backing of professionals guiding them along the way. It also supports the backers (investors) by giving 
                    them the guarantee that they will either get the product in a timely manner or get their money back.
                  </p>
                <p>&nbsp;</p>
                  <p><strong>Why are these called Adventures?</strong><br />
                    If you’ve ever created or backed a project you understand these are more than buying a 
                    product at a store, every one of these projects is an Adventure.  From the creators story on why 
                    this is being created to the backer and why they are investing.  There will be highs, and sometimes lows, 
                    on the Adventure – but it will be a fun ride with cool rewards at the end.
                  </p>
                  <p>&nbsp;</p>
                  
                  <p><strong>Why Choose CrowdAdventure?</strong><br />
                    CrowdAdventure is different than other popular CrowdFunding sites as we partner with creators to help them bring 
                    their projects to life. We work with creators from the concept / pre-launch phase ensuring the correct vendors have 
                    been chosen, to realistic budgets and timelines are set, all the way through fulfillment – getting the product to 
                    the backers.
                  </p>
                  <p>&nbsp;</p>
                    <p>Backers are kept up to date with where the project currently stands as well as the expected delivery date.  
                    If a project is ever more then 4 months past delivery date, backers can ask for a refund ensuring their i
                    nvestment is safe.</p>  
                    <p>&nbsp;</p>
                    <p>CrowdAdventure is more than a CrowdFunding site – it is a project management tool allowing creators to focus on 
                    what they are best at – creating!  </p>
                    <p>&nbsp;</p>

                  <p><strong>How Does it Work?</strong><br />
                  First, we don’t accept all projects.  We are selective about both the projects and the creators that we work with.  
                  We don’t measure ourselves by the amount of money we make, or the volume of projects.  We measure our success by fulfilling 
                  Adventures and ensuring that our creators and backers are happy with their experience.</p>
                  <p>&nbsp;</p>
                  <p>Money collected from backers goes into an account in which all production costs and fulfillment costs are paid out of.  
                  Once the Adventure has been fulfilled and the backers have received their Adventure, the creator receives the remaining money.</p>  
                  <p>&nbsp;</p>
                  <p>CrowdAdventure takes approximately 3% of the gross collected only if the Adventure is successfully delivered, the other 
                    fees are from the credit card service, which are above and beyond our control.</p>
                    <p>&nbsp;</p>



                  <ol><strong>Each Adventure Has Three Phases:</strong>
                      
                      <li><strong>Pre-launch</strong> – Conception of the project where the planning takes place and steps are created to ensure the Adventure can be launched – 
                        this is the riskiest part of the Adventure and backers who back at this stage usually back for more rewards, but the money-back guarantee 
                        isn’t offered at this point.</li>
                        <p>&nbsp;</p>
                      <li><strong>Launch</strong> – The Adventure is launched for a limited amount of time. Creators have the ability to offer special rewards offered to only this 
                        phase of the project. During this stage all rewards are covered by the money-back guarantee!</li>
                        <p>&nbsp;</p>
                      <li><strong>Fulfillment</strong> – The least risky phase – at this point backers are just purchasing the product.  Special incentives may be offered by 
                        the creators.</li>
                    </ol>
                    <p>&nbsp;</p>
                    <p>CrowdFunding is exciting and an amazing way for creators to bring their ideas to life, 
                      but it also has a lot of challenges for both creators and backers.  </p>
                </div>

                  <p>&nbsp;</p>

      


               <Link className="footer_link_top" to={'/create'}>Start your own Adventure! >></Link>

               <Link className="footer_link_bottom" to={'/view'}>Be a part of someone else’s Adventure! >></Link>


          
            </div>   
          </div>
        );
      }
  
}

export default About;




     

      