define({ 
  resetData(){
    globals.data = {};

    //step1
    this.view.tfMissionId.text = '';
    this.view.dsMissionDate.reset();
    this.view.tfMissionTitle.text = '';
    this.view.selMissionType.selection = '';
    this.view.selMissionAuditEntity.selection = '';
    this.view.selMissionAuditUnity.selection = '';
    this.view.selMissionAuditType.selection = '';
    this.view.taMissionComments.text = '';

    //step2
    this.view.tfRecoId.text = '';
    this.view.tfRecoTitle.text = '';
    this.view.selRecoAuditUnity.selection = '';
    this.view.selRecoReferencedUnity.selection  = '';
    this.view.tfRecoEmail.text = '';
    this.view.selRecoHierarchy.selection = '';
    this.view.taRecoComments.text = '';

    //step3
    this.view.labelProposeMissionId.text = '';
    this.view.radioProposeStep.selection = 'right';
    this.view.tfProposeDescription.text = '';
    this.view.selProposeSolutionType.selection = '';
    this.view.taProposeRequirements.text = '';
    this.view.labelProposeMissionDate.text = '';
    this.view.radioProposeSoftware.selection = 'right';
    this.view.dsProposeTargetDate.reset();
    this.view.taProposeComplements.text = '';

    //step4
    this.view.taSolutionDefinition.text = '';

    //step5
    this.view.recapSolutionStep.text = '';
    this.view.recapSolutionSoftware.text = '';
    this.view.recapSolutionDescription.text = '';
    this.view.recapSolutionTargetDate.text = '';
    this.view.recapSolutionType.text = '';
    this.view.recapSolutionRequirements.text = '';
    this.view.recapSolutionComplements.text = '';
    this.view.recapSolutionDefinition.text = '';

    //step 6
    this.view.selImplLevel.selection = '';
    this.view.radioImplUserAcceptance.selection = 'right';
    this.view.radioImplInvolve.selection = 'right';
    this.view.taImplComments.text = '';

    //step 7
    this.view.recapImplLevel.text = '';
    this.view.recapImplUserAcceptance.text = '';
    this.view.recapImplInvolve.text = '';
    this.view.recapImplComments.text = '';

  },

  onViewCreated(){

    this.view.init = () => {
      //the 'Go To Previous' buttons are hidden in the final release
      this.view.btnPrevious1.onClick = () => this.goToPreviousStep();
      this.view.btnPrevious2.onClick = () => this.goToPreviousStep();
      this.view.btnPrevious3.onClick = () => this.goToPreviousStep();
      this.view.btnPrevious4.onClick = () => this.goToPreviousStep();
      this.view.btnPrevious5.onClick = () => this.goToPreviousStep();
      this.view.btnPrevious6.onClick = () => this.goToPreviousStep();
      this.view.btnPrevious7.onClick = () => this.goToPreviousStep();

      this.view.flxBigButtonRight.onClick = () => {
        this.goToNextStep();
      };

      this.view.btnNext1.onClick = () => {
        const stepData = {
          missionId: this.view.tfMissionId.text,
          missionDate: this.view.dsMissionDate.getDate(),
          missionTitle: this.view.tfMissionTitle.text,
          missionType: this.view.selMissionType.selection,
          auditEntity: this.view.selMissionAuditEntity.selection,
          auditUnity: this.view.selMissionAuditUnity.selection,
          auditType: this.view.selMissionAuditType.selection,
          comments: this.view.taMissionComments.text
        };
        if(stepData.missionId && stepData.missionTitle){
          this.view.labelProposeMissionId.text = stepData.missionId;
          this.view.labelProposeMissionDate.text = this.view.dsMissionDate.getDateAsString();

          this.saveData(1, stepData).then((result) => {
            this.goToNextStep();
          }).catch((error) => {
            alert(error);
          });
        } else {
          alert("The fields 'Mission ID' and 'Mission Title' are required");
        }
      };

      this.view.btnNext2.onClick = () => {
        const stepData = {
          recoId: this.view.tfRecoId.text,
          recoTitle: this.view.tfRecoTitle.text,
          auditUnity: this.view.selRecoAuditUnity.selection,
          referencedUnity: this.view.selRecoReferencedUnity.selection,
          recoEmail: this.view.tfRecoEmail.text,
          recoHierarchy: this.view.selRecoHierarchy.selection,
          comments: this.view.taRecoComments.text
        };
        if(stepData.recoId && stepData.recoTitle){
          this.saveData(2, stepData).then((result) => {
            this.goToNextStep();
          }).catch((error) => {
            alert(error);
          });
        } else {
          alert("The fields 'Recommandation ID' and 'Recommandation Title' are required");
        }
      };

      this.view.btnNext3.onClick = () => {
        const stepData = {
          step: this.view.radioProposeStep.getBooleanValue(),
          description: this.view.tfProposeDescription.text,
          solutionType: this.view.selProposeSolutionType.selection,
          requirements: this.view.taProposeRequirements.text,
          software: this.view.radioProposeSoftware.getBooleanValue(),
          targetDate: this.view.dsProposeTargetDate.getDate(),
          complements: this.view.taProposeComplements.text
        };

        this.view.recapSolutionStep.text = this.view.radioProposeStep.getValue();
        this.view.recapSolutionSoftware.text = this.view.radioProposeSoftware.getValue();
        this.view.recapSolutionDescription.text = stepData.description;
        this.view.recapSolutionTargetDate.text = this.view.dsProposeTargetDate.getDateAsString();
        this.view.recapSolutionType.text = stepData.solutionType;
        this.view.recapSolutionRequirements.text = stepData.requirements.replace(/\n/g, '<br>');
        this.view.recapSolutionComplements.text = stepData.complements.replace(/\n/g, '<br>');

        this.saveData(3, stepData).then((result) => {
          this.goToNextStep();
        }).catch((error) => {
          alert(error);
        });
      };

      this.view.btnNext4.onClick = () => {
        const stepData = {
          solutionDefinition: this.view.taSolutionDefinition.text
        };

        this.view.recapSolutionDefinition.text = stepData.solutionDefinition.replace(/\n/g, '<br>');

        this.saveData(4, stepData).then((result) => {
          this.goToNextStep();
        }).catch((error) => {
          alert(error);
        });
      };

      this.view.btnNext5.onClick = () => {
        this.saveData(5, {}).then((result) => {
          this.goToNextStep();
        }).catch((error) => {
          alert(error);
        });
      };

      this.view.btnNext6.onClick = () => {
        const stepData = {
          level: this.view.selImplLevel.selection,
          userAcceptance: this.view.radioImplUserAcceptance.getBooleanValue(),
          involve: this.view.radioImplInvolve.getBooleanValue(),
          comments: this.view.taImplComments.text
        };

        this.view.recapImplLevel.text = stepData.level;
        this.view.recapImplUserAcceptance.text = this.view.radioImplUserAcceptance.getValue();
        this.view.recapImplInvolve.text = this.view.radioImplInvolve.getValue();
        this.view.recapImplComments.text = stepData.comments.replace(/\n/g, '<br>');

        this.saveData(6, stepData).then((result) => {
          this.goToNextStep();
        }).catch((error) => {
          alert(error);
        });
      };

      this.view.btnNext7.onClick = () => {
        this.view.successAlert.isVisible = true;
      };

      this.view.successAlert.onClickButton = () => {
        this.saveData(7, {}).then((result) => {
          this.resetData();
          globals.role = 'resp';
          globals.step = 0;
          eventManager.publish(globals.EVT_SET_ROLE, 'resp');
          eventManager.publish(globals.EVT_SET_STEP, 0);
        }).catch((error) => {
          alert(error);
        });
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

    this.view.postShow = () => {
      this.resetData();
    };

  },

  goToNextStep(){
    globals.step = (globals.step + 1) % 8;  
    eventManager.publish(globals.EVT_SET_STEP, globals.step);
  },

  goToPreviousStep(){
    globals.step--;  
    eventManager.publish(globals.EVT_SET_STEP, globals.step);
  },

  saveData(step, stepData){
    const promise = new Promise((resolve, reject) => {
      globals.data[`step${step}`] = stepData;
      resolve(stepData);
    });
    return promise;
  }

});