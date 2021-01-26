const WheelPage = props => (
    <div id="WheelPage">
        <form>
            <div className="color-1"><input type="text" name="part-1" value="Work" /></div>
            <div className="color-2"><input type="text" name="part-2" value="Selfcare" /></div>
            <div className="color-3 optional"><input type="text" name="part-3" value="" /></div>
        </form>
        <div id="wheel">
            <div className="part color-1" id="part-1"></div>
            <div className="part color-2" id="part-2"></div>
        </div>
    </div>
  );
  
  export default WheelPage;