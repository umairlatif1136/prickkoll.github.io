import './signin.css'
let Sign=()=>{
return(
    <div className='sin'>
        <br/>
        <br/>
        <br/>
        <br/>
        

        <form className='sign'>
            <p>namn</p>
            <input type='text'/>
            <p>personnummer</p>
            <input type='text'/>
            <p>losenord</p>
            <input type='text'/>
            <p>upprepa losenord</p>
            <input type='text'/>
            <p>email</p>
            <input type='text'/>
            <p>telefone</p>
            <input type='text'/>
            <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
   skicka ett dermatoskop med instruktioner till mig.
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
  <label class="form-check-label" for="defaultCheck2">
    jag har redan ett dermatoskop och onskar bedoma en ny hudforandring
  </label>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
    <label class="form-check-label" for="defaultCheck2">
   jag godkanner de villkor prickkol.se har gallande lagring och hantering  av mina personuppgifter 
  </label>
  </div>
</div>
<button className='betn'> forsatt</button>
        </form>
    </div>
)
}
export default Sign