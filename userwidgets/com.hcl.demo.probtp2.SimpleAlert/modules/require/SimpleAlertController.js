define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
              if(!this.initDone){
                this.view.flxBackground.onClick = () => this.view.isVisible = false;
                this.view.lblClose.onTouchEnd = () => this.view.isVisible = false;
                this.view.popupButton.onClick = () => {
                  this.view.isVisible = false;
                  this.onClickButton();
                };
                
                this.initDone = true;
              }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      
      onClickButton(){}
	};
});