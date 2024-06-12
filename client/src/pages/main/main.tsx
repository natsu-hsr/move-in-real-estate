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
        minus voluptas veritatis odit libero?
      </div>
      <div className={classes.form}>
        <SegmentedControl
          className={classes.segment}
          data={[
            {
              label: (
                <div className={classes.segmentLabel}>
                  <IconShoppingCart className={classes.segmentIcon} />
                  <div>Buy</div>
                </div>
              ),
              value: "Buy"
            },
            {
              label: (
                <div className={classes.segmentLabel}>
                  <IconHourglassEmpty className={classes.segmentIcon} />
                  <div>Rent</div>
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
      <div className={classes.stats}>
        <div className={classes.statItem}>
          <div className={classes.statName}>16+</div>
          <div className={classes.statDescription}>Years of Experience</div>
        </div>
        <div className={classes.statItem}>
          <div className={classes.statName}>200</div>
          <div className={classes.statDescription}>Awards Gained</div>
        </div>
        <div className={classes.statItem}>
          <div className={classes.statName}>2000+</div>
          <div className={classes.statDescription}>Property Ready</div>
        </div>
      </div>
    </div>
    <SelectHouseImage className={classes.image} />
  </main>
)