export default abstract class BaseModelSequelize<T> {

    protected model;

    protected constructor(model:T) {
        this.model = model;
    }

}
