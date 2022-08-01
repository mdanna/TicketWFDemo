define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
              this.view.onClick = () => {
                globals.role = this.roleKey;
                eventManager.publish(globals.EVT_SET_ROLE, this.roleKey);
              };
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'roleKey', () => {
                return this._roleKey;
            });
            defineSetter(this, 'roleKey', value => {
                this._roleKey = value;
            });
        }
	};
});