export default interface DeleteHarvestInputPort {
  execute(id: string): Promise<void>;
}
