import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './card';

function App() {

  var cardDetails = [
    {
      planName : "Free",
      price : 0,
      features :[
        {yes:"Single User",
        isEnabled:true},
        {yes:"5GB Storage",
        isEnabled:true},
        {yes:"Unlimited Public Projects",
        isEnabled:true},
        {yes:"Community Access",
        isEnabled:true},
        {no:"Unlimited Private Projects",
        isEnabled:false},
        {no:"Dedicated Phone Support",
        isEnabled:false},
        {no:"Free Subdomain",
        isEnabled:false},
        {no:"Monthly Status Reports",
        isEnabled:false}
      ]},
      {
        planName : "Plus",
        price : 9,
        features :[
        {yes:"5 User",
         isEnabled:true},
        {yes:"50GB Storage",
        isEnabled:true},
        {yes:"Unlimited Public Projects",
        isEnabled:true},
        {yes:"Community Access",
        isEnabled:true},
        {yes:"Unlimited Private Projects",
        isEnabled:true},
        {yes:"Dedicated Phone Support",
        isEnabled:true},
        {yes:"Free Subdomain",
        isEnabled:true},
        {no:"Monthly Status Reports",
        isEnabled:false}
        ]},
        {
        planName : "Pro",
        price : 49,
        features :[
        {yes:"Unlimited User",
        isEnabled:true},
        {yes:"150GB Storage",
        isEnabled:true},
        {yes:"Unlimited Public Projects",
        isEnabled:true},
        {yes:"Community Access",
        isEnabled:true},
        {yes:"Unlimited Private Projects",
        isEnabled:true},
        {yes:"Dedicated Phone Support",
        isEnabled:true},
        {yes:"Unlimites Free Subdomain",
        isEnabled:true},
        {yes:"Monthly Status Reports",
        isEnabled:true}
          ]}]

  return (
    
    <div className="App">
      <section class="pricing py-5">
  <div className="container">
    <div className="row">


    {cardDetails.map((card)=>{
          return <Card card={card}></Card>
        })}



    </div>
  </div>
</section>

    </div>
  
  );
}



export default App;
