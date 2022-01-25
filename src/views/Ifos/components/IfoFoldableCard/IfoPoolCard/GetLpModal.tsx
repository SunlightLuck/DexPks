import React from 'react'
import { Modal, ModalBody, Text, Image, Button, Link, OpenNewIcon } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { useTranslation } from 'contexts/Localization'

interface Props {
  currency: Token
  onDismiss?: () => void
}

const GetLpModal: React.FC<Partial<Props>> = ({ currency, onDismiss }) => {
  const { t } = useTranslation()
  return (
    <Modal title={t('LP Tokens required')} onDismiss={onDismiss}>
      <ModalBody maxWidth="288px">
        <Image
          src={`/images/farms/${currency.symbol.split(' ')[0].toLocaleLowerCase()}.svg`}
          width={72}
          height={72}
          margin="auto"
          mb="24px"
        />
        <Text mb="16px">{t('You’ll need CAKE-BNB LP tokens to participate in the IFO!')}</Text>
        <Text mb="24px">{t('Get LP tokens, or make sure your tokens aren’t staked somewhere else.')}</Text>
        <Button
          as={Link}
          external
          href={`${BASE_ADD_LIQUIDITY_URL}/BNB/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82`}
          endIcon={<OpenNewIcon color="white" />}
          minWidth="100%" // Bypass the width="fit-content" on Links
        >
          {t('Get LP tokens')}
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default GetLpModal
