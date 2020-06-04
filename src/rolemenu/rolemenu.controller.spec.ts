import { Test, TestingModule } from '@nestjs/testing';
import { RolemenuController } from './rolemenu.controller';

describe('Rolemenu Controller', () => {
  let controller: RolemenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolemenuController],
    }).compile();

    controller = module.get<RolemenuController>(RolemenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
