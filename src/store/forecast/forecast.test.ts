import reducers from '../store.reducers';
import mutation from './forecast.mutations';

describe('Test Store Mutation', () => {

  // it('Test modifyShareholderInfoAt', () => {
  //   let state;
  //   state = reducers({
  //     shareholderReducer: {
  //       shareholders: {
  //         activity: 0, payload: [
  //           new ShareholderListingModel({
  //             firstname: "You",
  //             email: "svohong@bocasay.com",
  //             isOwner: true,
  //             percentage: 100
  //           }),
  //           new ShareholderListingModel({
  //             firstname: "John",
  //             lastname: "Maddison",
  //             email: "john.maddison@gmail.com"
  //           })
  //         ], version: null, error: null
  //       }
  //     }
  //   }, { type: 'Shareholder/ADD_MODIFY_SHAREHOLDER', payload: { index: 1, key: 'firstname', value: '' } });

  //   expect(state).toEqual({
  //     shareholderReducer: {
  //       shareholders: {
  //         activity: 0, payload: [
  //           new ShareholderListingModel({
  //             firstname: "You",
  //             email: "svohong@bocasay.com",
  //             isOwner: true,
  //             percentage: 100
  //           }),
  //           new ShareholderListingModel({
  //             firstname: "",
  //             lastname: "Maddison",
  //             email: "john.maddison@gmail.com"
  //           })
  //         ], version: null, error: null
  //       }
  //     }
  //   });

  // })

  // it("Test validate shareholder in array", () => {

  //   let state;
  //   state = reducers({
  //     shareholderReducer: {
  //       shareholders: {
  //         activity: 0, payload: [
  //           new ShareholderListingModel({
  //             firstname: "You",
  //             email: "svohong@bocasay.com",
  //             isOwner: true,
  //             percentage: 100
  //           })
  //         ], version: null, error: null
  //       }
  //     }
  //   }, { type: 'Shareholder/ADD_VALIDATE_ITEM' });

  //   expect(state).toEqual({
  //     shareholderReducer: {
  //       shareholders: {
  //         activity: 0, payload: [
  //           new ShareholderListingModel({
  //             firstname: "You",
  //             email: "svohong@bocasay.com",
  //             isOwner: true,
  //             percentage: 100
  //           })
  //         ], version: null, error: true
  //       }
  //     }
  //   })
  // })

  // it("Test addShareholderAt",() =>{
  //   let state;
  //   state = reducers({
  //     shareholderReducer: {
  //       shareholders: {
  //         activity: 0, payload: [
  //           new ShareholderListingModel({
  //             firstname: "You",
  //             email: "svohong@bocasay.com",
  //             isOwner: true,
  //             percentage: 100
  //           })
  //         ], version: null, error: null
  //       }
  //     }
  //   }, { type: 'Shareholder/ADD_AT', payload: 1 });

  //   expect(state).toEqual({
  //     shareholderReducer: {
  //       shareholders: {
  //         activity: 0, payload: [
  //           new ShareholderListingModel({
  //             firstname: "You",
  //             email: "svohong@bocasay.com",
  //             isOwner: true,
  //             percentage: 100
  //           }),
  //           new ShareholderListingModel({
  //             firstname: "",
  //             lastname: "",
  //             email: "",
  //             isOwner: false,
  //             percentage: 0
  //           })
  //         ], version: null, error: null
  //       }
  //     }
  //   })
  // })
})

