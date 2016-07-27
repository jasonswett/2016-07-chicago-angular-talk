/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FooComponent } from './foo.component';

describe('Component: Foo', () => {
  it('should create an instance', () => {
    let component = new FooComponent();
    expect(component).toBeTruthy();
  });
});
