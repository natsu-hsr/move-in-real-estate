import {ActionIcon, NumberInput, SegmentedControl, TextInput} from '@mantine/core';
import React from 'react';
import {IconShoppingCart, IconHourglassEmpty, IconSearch} from '@tabler/icons-react';

import classes from './main.module.css';
import {ReactComponent as SelectHouseImage} from '../../assets/select-house.svg';

export const Main = () => (
  <main className={classes.wrapper}>
    <div className={classes.about}>
      <h1 className={classes.title}>
        Find Real Estate & Get<br />Your Dream Place!
      </h1>
      <div className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit illo molestias,
        et veniam iure, dicta deserunt atque, labore at enim ipsum. Nesciunt optio,
        ut minus voluptas veritatis odit libero?
      </div>
      <div className={classes.form}>
        <SegmentedControl
          className={classes.segmentedControl}
          data={[
            {
              label: (
                <div className={classes.switchLabel}>
                  <div>Buy</div>
                  <IconShoppingCart className={classes.switchIcon}/>
                </div>
              ),
              value: "Buy"
            },
            {
              label: (
                <div className={classes.switchLabel}>
                  <div>Rent</div>
                  <IconHourglassEmpty className={classes.switchIcon}/>
                </div>
              ),
              value: "Rent"
            },
          ]}
        />

        <div className={classes.fields}>
          <TextInput
            className={classes.field}
            placeholder="City"
          />
          <NumberInput
            className={classes.field}
            placeholder="Min price"
            prefix='$'
            hideControls
          />
          <NumberInput
            className={classes.field}
            placeholder="Max price"
            prefix='$'
            hideControls
          />
          <ActionIcon className={classes.search}>
            <IconSearch className={classes.searchIcon} />
          </ActionIcon>
        </div>
      </div>
    </div>
    <SelectHouseImage className={classes.image} />
  </main>
)