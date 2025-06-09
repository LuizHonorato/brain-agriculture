export default interface DeleteRuralProducerInputPort {
  execute(id: string): Promise<void>;
}
