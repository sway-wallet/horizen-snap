export enum ENetworkName {
  MAINNET = 'Horizen EON',
  TESTNET = 'Gobi Testnet',
};

export const networksConstant  = {
  [ENetworkName.MAINNET]: {
    chainId: '0x1ca4',
    chainName: ENetworkName.MAINNET,
    nativeCurrency: {
      name: 'ZEN',
      symbol: 'ZEN',
      decimals: 18,
    },
    rpcUrls: ['https://eon-rpc.horizenlabs.io/ethv1'],
    blockExplorerUrls: ['https://eon-explorer.horizenlabs.io/'],
  },
  [ENetworkName.TESTNET]: {
    chainId: '0x67f',
    chainName: ENetworkName.TESTNET,
    nativeCurrency: {
      name: 'TZEN',
      symbol: 'TZEN',
      decimals: 18,
    },
    rpcUrls: ['https://gobi-rpc.horizenlabs.io/ethv1'],
    blockExplorerUrls: ['https://explorer-testnet.zensystem.io'],
  }
};
