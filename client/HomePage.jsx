import React, { Component } from "react";

export default class Homepage extends Component {
  constructor() {
    this.state = {
        isLoading:true,
      totalInstructionsCount: 0,
      approveInstructionsCount: 0,
      totalRequestRateCount: 0,
      requestRatesCount: 0,
      modifyInstructionsCount: 0,
      approveTemplatesCount: 0,
      addInstructionsCount: 0,
      totalAddInstructionFinalCount: 0,
      confirmContractCount: 0,
      printDraftCount: 0,
      contractFlag: false,
      draftFlag: false,
      widgets: []
    };
  }
 async componentDidMount() {

    const [confirmContractRes, printDraftRes,totalRes] = await Promise.all([
        axios.get(),
        axios.get(),
        axios.get()
      ]);
      this.setState({
        confirmContractCount: confirmContractRes.data.confirmContractCount,
        printDraftCount: printDraftRes.data.printDraftCount,
        totalInstructionsCount: totalRes.data.totalInstructionsCount,
      });
    

    axios.get().then(res => {
      this.setState({ confirmContractCount: res.data.confirmContractCount });
    });

    axios.get().then(res => {
      this.setState({ printDraftCount: res.data.printDraftCount });
    });

    axois.get().then(res => {
      this.setState({
        totalInstructionsCount: res.data.totalInstructionsCount,
        approveInstructionsCount: res.data.approveInstructionsCount,
        totalRequestRatesCount: res.data.totalRequestRatesCount,
        requestRatesCount: res.data.requestRatesCount,
        modifyInstructionsCount: res.data.modifyInstructionsCount,
        approveTemplatesCount: res.data.approveTemplatesCount,
        addInstructionsCount: res.data.addInstructionsCount,
        totalAddInstructionFinalCount: res.data.totalAddInstructionFinalCount,
        widgets: [
          {
            title: STRINGS.labelAddInst,
            totalCount: res.data.totalAddInstructionFinalCount,
            availableCount: res.data.addInstructionsCount,
            success: STRINGS.highPrioritySuccessMsg,
            noSucces: STRINGS.homeNoAddInstructionSuccessMsg
          },
          {
            title: STRINGS.labelApproveInstructions,
            totalCount: res.data.totalInstructionsCount,
            availableCount: res.data.approveInstructionsCount,
            success: STRINGS.highPrioritySuccessMsg,
            noSucces: STRINGS.homeNoApproveInstructionSuccessMsg
          },
          {
            title: STRINGS.labelApproveTemplates,
            totalCount: res.data.approveTemplatesCount,
            availableCount: res.data.approveTemplatesCount,
            success: STRINGS.homeApproveTemplateSuccessMsg,
            noSucces: STRINGS.homeNoApproveTemplateSuccessMsg
          },
          {
            title: labelRequestRates,
            totalCount: res.data.totalRequestRatesCount,
            availableCount: res.data.requestRatesCount,
            success: STRINGS.highPrioritySuccessMsg,
            noSucces: STRINGS.homeNoRequestRateSuccessMsg
          },
          {
            title: labelModifyRejectedInstructions,
            totalCount: res.data.modifyInstructionsCount,
            availableCount: res.data.modifyInstructionsCount,
            success: STRINGS.homeModifyRejectedInstructionSuccessMsg,
            noSucces: STRINGS.homeNoModifyRejectedInstructionSuccessMsg
          }
        ]
      });
    });
    let widgetSet = [...this.state.widgets];
    if (contractFlag) {
      widgetSet.push({
        title: labelConfirmContracts,
        totalCount: this.state.confirmContractCount,
        availableCount: this.state.confirmContractCount,
        success: STRINGS.homeConfirmContractSuccessMsg,
        noSucces: STRINGS.homeNoConfirmContractSuccessMsg
      });
    }

    if (draftFlag) {
      widgetSet.push({
        title: labelManageDrafts,
        totalCount: this.state.printDraftCount,
        availableCount: this.state.printDraftCount,
        success: STRINGS.homePrintDraftSuccessMsg,
        noSucces: STRINGS.homeNoPrintDraftSuccessMsg
      });
    }
    this.setState({ widgets: widgetSet ,isLoading: false});
  };

  render() {
    const { widgets,isLoading } = this.state;
    return (
      <PageContainer title={this.title}>
       {isLoading ? <Spinner /> :( <div className="wf-row-padding">
        
            {widgets.map(widget => (
            <DashBoardWidgetContainer title={widget.title}>
              <DashboardWrapperContainer
                totalCount={widget.totalCount}
                availbleCount={widget.appliedCount}
                success={widget.success}
                noSuccess={widget.noSuccess}
              />
            </DashBoardWidgetContainer>
          ))}
          
        
        </div>)
       }
      </PageContainer>
    );
  }
}
