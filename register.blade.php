@include('fragments.html-top')

<div class="container-xxl">
    <div class="row">
        <div class="col-lg-5 auth-left">
            <div class="h-100 d-flex align-items-center justify-content-center sp-py-md sp-px-md-lg sp-px-lg-xl">
                <div class="wrapper">
                    @include('fragments.auth-welcome')
                </div>
            </div>
        </div>
        <div class="col-lg-7 auth-right">
            <div class="h-100 d-flex align-items-center justify-content-center sp-py-md sp-px-md-lg sp-px-lg-xl">
                <div class="w-100">
                    @include('fragments.account-type-selector')
                    @include('fragments.registration-form')
                </div>
            </div>

        </div>
    </div>
</div>


@include('fragments.html-bottom')


