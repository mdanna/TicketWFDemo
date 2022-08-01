define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.onClick = () => this.onClick();

          this.initDone = true;
        }
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    onClick(){}
  };
});