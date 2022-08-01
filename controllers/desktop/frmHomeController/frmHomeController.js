define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.flxBigButtonRight.onClick = () => this.goToNextStep();

      this.view.btnPrevious1.onClick = () => this.goToPreviousStep();
      this.view.btnNext1.onClick = () => {
        this.goToNextStep();
      };
      this.view.btnPrevious2.onClick = () => this.goToPreviousStep();
      this.view.btnNext2.onClick = () => {
        this.goToNextStep();
      };
      this.view.btnPrevious3.onClick = () => this.goToPreviousStep();
      this.view.btnNext3.onClick = () => {
        this.goToNextStep();
      };
      this.view.btnPrevious4.onClick = () => this.goToPreviousStep();
      this.view.btnNext4.onClick = () => {
        this.goToNextStep();
      };
      this.view.btnPrevious5.onClick = () => this.goToPreviousStep();
      this.view.btnNext5.onClick = () => {
        this.goToNextStep();
      };
      this.view.btnPrevious6.onClick = () => this.goToPreviousStep();
      this.view.btnNext6.onClick = () => {
        this.goToNextStep();
      };
      this.view.btnPrevious7.onClick = () => this.goToPreviousStep();
      this.view.btnNext7.onClick = () => {
        this.goToNextStep();
      };
      
      
      eventManager.subscribe(globals.EVT_SET_STEP, (step) => {
        this.view.cmpWaiting.role = globals.users[globals.roleForStep[step]].role;
        this.view.cmpWaiting.isVisible = globals.roleForStep[step] !== globals.role;
        this.view.flxBody.isVisible = globals.roleForStep[step] === globals.role;
        for(let i = 0; i <= 7; i++){
          this.view[`flxStep${i}`].isVisible = i === step;
        }
      });

      eventManager.subscribe(globals.EVT_SET_ROLE, (role) => {
        this.view.cmpWaiting.role = globals.users[globals.roleForStep[globals.step]].role;
        this.view.cmpWaiting.isVisible = globals.roleForStep[globals.step] !== globals.role;
        this.view.flxBody.isVisible = globals.roleForStep[globals.step] === globals.role;
      });
    };

    this.view.preShow = () => {
      eventManager.publish(globals.EVT_SET_ROLE, 'resp');
      eventManager.publish(globals.EVT_SET_STEP, 0);
    };

  },

  goToNextStep(){
    globals.step = (globals.step + 1) % 8;  
    eventManager.publish(globals.EVT_SET_STEP, globals.step);
  },

  goToPreviousStep(){
    globals.step--;  
    eventManager.publish(globals.EVT_SET_STEP, globals.step);
  }

});