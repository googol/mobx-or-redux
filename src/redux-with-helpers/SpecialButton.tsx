import React from 'react'
import { Button } from '@react95/core'
import { useDispatch, useSelector } from './hooks'
import { changeText } from './actions/specialButton'
import { withMeta } from './actions/withMeta'

export const SpecialButton: React.FC = () => {
  const buttonText = useSelector((state) => state.specialButton.text)
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() =>
        dispatch(
          withMeta(changeText('FOOBAR'), {
            schedule: {
              timeout: 2000,
              action: changeText('CLICK ME'),
            },
          }),
        )
      }
    >
      {buttonText}
    </Button>
  )
}
