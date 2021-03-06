import { createSelector } from 'reselect';

const getPaperclips = (state) => state.business.paperClips;

export const getPaperclipsState = createSelector(
    [getPaperclips],
    (paperClips) => paperClips
);

const getClipsPerSec = (state) => state.business.clipsPerSec;

export const getClipsPerSecState = createSelector(
    [getClipsPerSec],
    (x) => x
);

const getFunds = (state) => state.business.funds;

export const getFundsState = createSelector(
    [getFunds],
    (x) => x
);

const getPaperclipPrice = (state) => state.business.paperclipPrice;

export const getPaperclipPriceState = createSelector(
    [getPaperclipPrice],
    (x) => x
);

const getUnsoldInventory = (state) => state.business.unsoldInventory;

export const getUnsoldInventoryState = createSelector(
    [getUnsoldInventory],
    (x) => x
);

const getPublicDemand = (state) => state.business.publicDemand;

export const getPublicDemandState = createSelector(
    [getPublicDemand],
    (x) => x
);

const getMarketingLevel = (state) => state.business.marketingLevel;

export const getMarketingLevelState = createSelector(
    [getMarketingLevel],
    (x) => x
);

const getMarketingCost = (state) => state.business.marketingCost;

export const getMarketingCostState = createSelector(
    [getMarketingCost],
    (x) => x
);

const getMarketingButtonDisabled = (state) => state.business.marketingButtonDisabled;

export const getMarketingButtonDisabledState = createSelector(
    [getMarketingButtonDisabled],
    (x) => x
);

const getDelay = (state) => state.business.delay;

export const getDelayState = createSelector(
    [getDelay],
    (x) => x
);

const getWire = (state) => state.business.wire;

export const getWireState = createSelector(
    [getWire],
    (x) => x
);

const getWirePrice = (state) => state.business.wirePrice;

export const getWirePriceState = createSelector(
    [getWirePrice],
    (x) => x
);

const getWireButtonDisabled = (state) => state.business.wireButtonDisabled;

export const getWireButtonDisabledState = createSelector(
    [getWireButtonDisabled],
    (x) => x
);

const getAutoClippersPerSec = (state) => state.business.autoClippersPerSec;

export const getAutoClippersPerSecState = createSelector(
    [getAutoClippersPerSec],
    (x) => x
);

const getAutoClipperInitPrice = (state) => state.business.autoClipperInitPrice;

export const getAutoClipperInitPriceState = createSelector(
    [getAutoClipperInitPrice],
    (x) => x
);

const getAutoClipperPrice = (state) => state.business.autoClipperPrice;

export const getAutoClipperPriceState = createSelector(
    [getAutoClipperPrice],
    (x) => x
);

const getMegaClipperInitPrice = (state) => state.business.megaClipperInitPrice;

export const getMegaClipperInitPriceState = createSelector(
    [getMegaClipperInitPrice],
    (x) => x
);

const getMegaClipperPrice = (state) => state.business.megaClipperPrice;

export const getMegaClipperPriceState = createSelector(
    [getMegaClipperPrice],
    (x) => x
);

const getAutoClippersButtonDisabled = (state) => state.business.autoClippersButtonDisabled;

export const getAutoClippersButtonDisabledState = createSelector(
    [getAutoClippersButtonDisabled],
    (x) => x
);

const getMegaClippersButtonDisabled = (state) => state.business.megaClippersButtonDisabled;

export const getMegaClippersButtonDisabledState = createSelector(
    [getMegaClippersButtonDisabled],
    (x) => x
);

const getAutoClipperOn = (state) => state.business.autoClipperOn;

export const getAutoClipperOnState = createSelector(
    [getAutoClipperOn],
    (x) => x
);

const getTrust = (state) => state.business.trust;

export const getTrustState = createSelector(
    [getTrust],
    (x) => x
);

const getClipsToBuyTrust = (state) => state.business.clipsToBuyTrust;

export const getClipsToBuyTrustState = createSelector(
    [getClipsToBuyTrust],
    (x) => x
);

const getDelayAutoPaperClippers = (state) => state.business.delayAutoPaperClippers;

export const getDelayAutoPaperClippersState = createSelector(
    [getDelayAutoPaperClippers],
    (x) => x
);

const getOps = (state) => state.business.ops;

export const getOpsState = createSelector(
    [getOps],
    (x) => x
);

const getOpsMax = (state) => state.business.opsMax;

export const getOpsMaxState = createSelector(
    [getOpsMax],
    (x) => x
);

const getProcessorsNumber = (state) => state.business.processorsNumber;

export const getProcessorsNumberState = createSelector(
    [getProcessorsNumber],
    (x) => x
);

const getProcessorsMemory = (state) => state.business.processorsMemory;

export const getProcessorsMemoryState = createSelector(
    [getProcessorsMemory],
    (x) => x
);

const getCreativity = (state) => state.business.creativity;

export const getCreativityState = createSelector(
    [getCreativity],
    (x) => x
);

const getCards = (state) => state.business.cards;

export const getCardsState = createSelector(
    [getCards],
    (x) => x
);

const getRevTracker = (state) => state.business.revTracker;

export const getRevTrackerState = createSelector(
    [getRevTracker],
    (x) => x
);

const getMakePaperclipDisabled = (state) => state.business.makePaperclipDisabled;

export const getMakePaperclipDisabledState = createSelector(
    [getMakePaperclipDisabled],
    (x) => x
);

const getCreativityTurnOn = (state) => state.business.creativityTurnOn;

export const getCreativityTurnOnState = createSelector(
    [getCreativityTurnOn],
    (x) => x
);

const getListInvestments = (state) => state.business.listInvestments;

export const getListInvestmentsState = createSelector(
    [getListInvestments],
    (x) => x
);

const getChosenListDropdown = (state) => state.business.chosenListDropdown;

export const getChosenListDropdownState = createSelector(
    [getChosenListDropdown],
    (x) => x
);

const getListStrategicModeling = (state) => state.business.listStrategicModeling;

export const getListStrategicModelingState = createSelector(
    [getListStrategicModeling],
    (x) => x
);

const getNoWire = (state) => state.business.noWire;

export const getNoWireState = createSelector(
    [getNoWire],
    (x) => x
);

const getShowInvestmentEngine = (state) => state.business.showInvestmentEngine;

export const getShowInvestmentEngineState = createSelector(
    [getShowInvestmentEngine],
    (x) => x
);

const getStrategicModelingIsShown = (state) => state.business.strategicModelingIsShown;

export const getStrategicModelingIsShownState = createSelector(
    [getStrategicModelingIsShown],
    (x) => x
);

const getComments = (state) => state.business.comments;

export const getCommentsState = createSelector(
    [getComments],
    (x) => x
);

const getShowDropdownStrategicModeling = (state) => state.business.showDropdownStrategicModeling;

export const getShowDropdownStrategicModelingState = createSelector(
    [getShowDropdownStrategicModeling],
    (x) => x
);

const getShowDropdownInvestments = (state) => state.business.showDropdownInvestments;

export const getShowDropdownInvestmentsState = createSelector(
    [getShowDropdownInvestments],
    (x) => x
);

const getQuantumComputingIsShown = (state) => state.business.quantumComputingIsShown;

export const getQuantumComputingIsShownState = createSelector(
    [getQuantumComputingIsShown],
    (x) => x
);

const getShowQCompMessage = (state) => state.business.showQCompMessage;

export const getShowQCompMessageState = createSelector(
    [getShowQCompMessage],
    (x) => x
);

const getShowChip = (state) => state.business.showChip;

export const getShowChipState = createSelector(
    [getShowChip],
    (x) => x
);

const getChangedToQOps = (state) => state.business.changedToQOps;

export const getChangedToQOpsState = createSelector(
    [getChangedToQOps],
    (x) => x
);

const getCurrentQOps = (state) => state.business.currentQOps;

export const getCurrentQOpsState = createSelector(
    [getCurrentQOps],
    (x) => x
);

const getChips = (state) => state.business.chips;

export const getChipsState = createSelector(
    [getChips],
    (x) => x
);

const getWireBuyerIsShown = (state) => state.business.wireBuyerIsShown;

export const getWireBuyerIsShownState = createSelector(
    [getWireBuyerIsShown],
    (x) => x
);

const getAutoWireBuyerIsOn = (state) => state.business.autoWireBuyerIsOn;

export const getAutoWireBuyerIsOnState = createSelector(
    [getAutoWireBuyerIsOn],
    (x) => x
);

const getMegaClippersIsShown = (state) => state.business.megaClippersIsShown;

export const getMegaClippersIsShownState = createSelector(
    [getMegaClippersIsShown],
    (x) => x
);

const getAutoClippersIsShown = (state) => state.business.autoClippersIsShown;

export const getAutoClippersIsShownState = createSelector(
    [getAutoClippersIsShown],
    (x) => x
);

const getInvestmentsCash = (state) => state.business.investmentsCash;

export const getInvestmentsCashState = createSelector(
    [getInvestmentsCash],
    (x) => x
);

const getInvestmentsTotal = (state) => state.business.investmentsTotal;

export const getInvestmentsTotalState = createSelector(
    [getInvestmentsTotal],
    (x) => x
);

const getInvestmentsStocks = (state) => state.business.investmentsStocks;

export const getInvestmentsStocksState = createSelector(
    [getInvestmentsStocks],
    (x) => x
);

const getInvestmentsLines = (state) => state.business.investmentsLines;

export const getInvestmentsLinesState = createSelector(
    [getInvestmentsLines],
    (x) => x
);

const getAvgRevPerSec = (state) => state.business.avgRevPerSec;

export const getAvgRevPerSecState = createSelector(
    [getAvgRevPerSec],
    (x) => x
);

const getAvgClipsSoldPerSec = (state) => state.business.avgClipsSoldPerSec;

export const getAvgClipsSoldPerSecState = createSelector(
    [getAvgClipsSoldPerSec],
    (x) => x
);

const getMegaClippersToAdd = (state) => state.business.megaClippersToAdd;

export const getMegaClippersToAddState = createSelector(
    [getMegaClippersToAdd],
    (x) => x
);

const getMegaClippersPerSec = (state) => state.business.megaClippersPerSec;

export const getMegaClippersPerSecState = createSelector(
    [getMegaClippersPerSec],
    (x) => x
);

const getAutoAndMegaClippersWorks = (state) => state.business.autoAndMegaClippersWorks;

export const getAutoAndMegaClippersWorksState = createSelector(
    [getAutoAndMegaClippersWorks],
    (x) => x
);

const getTime = (state) => state.business.time;

export const getTimeState = createSelector(
    [getTime],
    (x) => x
);

const getTournamentContinues = (state) => state.business.tournamentContinues;

export const getTournamentContinuesState = createSelector(
    [getTournamentContinues],
    (x) => x
);

const getNewTournamentCost = (state) => state.business.newTournamentCost;

export const getNewTournamentCostState = createSelector(
    [getNewTournamentCost],
    (x) => x
);

const getNewTournamentButtonDisabled = (state) => state.business.newTournamentButtonDisabled;

export const getNewTournamentButtonDisabledState = createSelector(
    [getNewTournamentButtonDisabled],
    (x) => x
);

const getStrategicModelingData = (state) => state.business.strategicModelingData;

export const getStrategicModelingDataState = createSelector(
    [getStrategicModelingData],
    (x) => x
);

const getStrategicModelingCurrentList = (state) => state.business.strategicModelingCurrentList;

export const getStrategicModelingCurrentListState = createSelector(
    [getStrategicModelingCurrentList],
    (x) => x
);

const getShowStrategicModelingCurrentList = (state) => state.business.showStrategicModelingCurrentList;

export const getShowStrategicModelingCurrentListState = createSelector(
    [getShowStrategicModelingCurrentList],
    (x) => x
);

const getRoundsArray = (state) => state.business.roundsArray;

export const getRoundsArrayState = createSelector(
    [getRoundsArray],
    (x) => x
);

const getRoundAndPlayersIsShown = (state) => state.business.roundAndPlayersIsShown;

export const getRoundAndPlayersIsShownState = createSelector(
    [getRoundAndPlayersIsShown],
    (x) => x
);

const getPlayerLeftStrategyList = (state) => state.business.playerLeftStrategyList;

export const getPlayerLeftStrategyListState = createSelector(
    [getPlayerLeftStrategyList],
    (x) => x
);

const getPlayerTopStrategyList = (state) => state.business.playerTopStrategyList;

export const getPlayerTopStrategyListState = createSelector(
    [getPlayerTopStrategyList],
    (x) => x
);

const getStratedicModelingLeftPartIsShown = (state) => state.business.stratedicModelingLeftPartIsShown;

export const getStratedicModelingLeftPartIsShownState = createSelector(
    [getStratedicModelingLeftPartIsShown],
    (x) => x
);

const getStratedicModelingRightPartIsShown = (state) => state.business.stratedicModelingRightPartIsShown;

export const getStratedicModelingRightPartIsShownState = createSelector(
    [getStratedicModelingRightPartIsShown],
    (x) => x
);

const getStrategicModelingPartsHover = (state) => state.business.strategicModelingPartsHover;

export const getStrategicModelingPartsHoverState = createSelector(
    [getStrategicModelingPartsHover],
    (x) => x
);

const getCellIsDark = (state) => state.business.cellIsDark;

export const getCellIsDarkState = createSelector(
    [getCellIsDark],
    (x) => x
);

const getYomi = (state) => state.business.yomi;

export const getYomiState = createSelector(
    [getYomi],
    (x) => x
);

const getInvestmentsLevel = (state) => state.business.investmentsLevel;

export const getInvestmentsLevelState = createSelector(
    [getInvestmentsLevel],
    (x) => x
);

const getUpgradeInvestmentEngineCost = (state) => state.business.upgradeInvestmentEngineCost;

export const getUpgradeInvestmentEngineCostState = createSelector(
    [getUpgradeInvestmentEngineCost],
    (x) => x
);

const getCreativityCounterIsThrown = (state) => state.business.creativityCounterIsThrown;

export const getCreativityCounterIsThrownState = createSelector(
    [getCreativityCounterIsThrown],
    (x) => x
);

const getLexicalProcessingIsThrown = (state) => state.business.lexicalProcessingIsThrown;

export const getLexicalProcessingIsThrownState = createSelector(
    [getLexicalProcessingIsThrown],
    (x) => x
);

const getCombinatoryHarmonicsIsThrown = (state) => state.business.combinatoryHarmonicsIsThrown;

export const getCombinatoryHarmonicsIsThrownState = createSelector(
    [getCombinatoryHarmonicsIsThrown],
    (x) => x
);

const getTheHadwingerProblemIsThrown = (state) => state.business.theHadwingerProblemIsThrown;

export const getTheHadwingerProblemIsThrownState = createSelector(
    [getTheHadwingerProblemIsThrown],
    (x) => x
);

const getTheTothSausageConjectureIsThrown = (state) => state.business.theTothSausageConjectureIsThrown;

export const getTheTothSausageConjectureIsThrownState = createSelector(
    [getTheTothSausageConjectureIsThrown],
    (x) => x
);

const getDonkeySpaceIsThrown = (state) => state.business.donkeySpaceIsThrown;

export const getDonkeySpaceIsThrownState = createSelector(
    [getDonkeySpaceIsThrown],
    (x) => x
);

const getXavierReinitializationIsThrown = (state) => state.business.xavierReinitializationIsThrown;

export const getXavierReinitializationIsThrownState = createSelector(
    [getXavierReinitializationIsThrown],
    (x) => x
);

const getHostileTakeoverIsThrown = (state) => state.business.hostileTakeoverIsThrown;

export const getHostileTakeoverIsThrownState = createSelector(
    [getHostileTakeoverIsThrown],
    (x) => x
);

const getQuantumComputingIsThrown = (state) => state.business.quantumComputingIsThrown;

export const getQuantumComputingIsThrownState = createSelector(
    [getQuantumComputingIsThrown],
    (x) => x
);

const getQuantumTemporalReversionIsThrown = (state) => state.business.quantumTemporalReversionIsThrown;

export const getQuantumTemporalReversionIsThrownState = createSelector(
    [getQuantumTemporalReversionIsThrown],
    (x) => x
);

const getManufacturingSectionIsShown = (state) => state.business.manufacturingSectionIsShown;

export const getManufacturingSectionIsShownState = createSelector(
    [getManufacturingSectionIsShown],
    (x) => x
);

const getBusinessSectionIsShown = (state) => state.business.businessSectionIsShown;

export const getBusinessSectionIsShownState = createSelector(
    [getBusinessSectionIsShown],
    (x) => x
);

const getProcessorsMemoryIsShown = (state) => state.business.processorsMemoryIsShown;

export const getProcessorsMemoryIsShownState = createSelector(
    [getProcessorsMemoryIsShown],
    (x) => x
);

const getProcessorsNumberIsShown = (state) => state.business.processorsNumberIsShown;

export const getProcessorsNumberIsShownState = createSelector(
    [getProcessorsNumberIsShown],
    (x) => x
);

const getEndingIsShown = (state) => state.business.endingIsShown;

export const getEndingIsShownState = createSelector(
    [getEndingIsShown],
    (x) => x
);

const getCountdown = (state) => state.business.countdown;

export const getCountdownState = createSelector(
    [getCountdown],
    (x) => x
);

const getIsGameOver = (state) => state.business.isGameOver;

export const getIsGameOverState = createSelector(
    [getIsGameOver],
    (x) => x
);

const getCompleteGameIsThrown = (state) => state.business.completeGameIsThrown;

export const getCompleteGameIsThrownState = createSelector(
    [getCompleteGameIsThrown],
    (x) => x
);

const getDots = (state) => state.business.dots;

export const getDotsState = createSelector(
    [getDots],
    (x) => x
);
