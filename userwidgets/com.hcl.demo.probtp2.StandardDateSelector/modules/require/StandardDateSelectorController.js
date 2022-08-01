define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        const now = new Date();
        this.view.calSelection.dateComponents = this.view.calSelection.dateComponents || [now.getDate(), now.getMonth() + 1, now.getFullYear(), 0, 0, 0];
      };
    },

    initGettersSetters() {},
    
    getDateAsString(){
      let ret = '';
      const dateComp = this.view.calSelection.dateComponents;
      if(dateComp){
        ret = `${utils.getTwoDigitNumber(dateComp[0])}/${utils.getTwoDigitNumber(dateComp[1])}/${dateComp[2]}`;
      }
      return ret;
    },

    getDate(){
      let ret = null;
      const dateComp = this.view.calSelection.dateComponents;
      if(dateComp){
        ret = new Date(`${utils.getTwoDigitNumber(dateComp[0])}/${utils.getTwoDigitNumber(dateComp[1])}/${dateComp[2]}`);
      }
      return ret;
    },
    
    reset(){
      this.view.calSelection.dateComponents = null;
    }
  };
});